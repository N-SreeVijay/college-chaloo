import { useState } from "react";
import { apiRequest } from "../api/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  // 🔥 popup state
  const [sessionConflict, setSessionConflict] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  // 🔐 LOGIN
  const submit = async () => {
    const res = await apiRequest("/login/", "POST", form);

    // 🔥 SESSION EXISTS → SHOW POPUP
    if (res.session_exists) {
      setSessionConflict(res.session);
      setShowPopup(true);
      return;
    }

    // ✅ NORMAL LOGIN
    if (res.access) {
      localStorage.setItem("access", res.access);
      localStorage.setItem("refresh", res.refresh);
      navigate("/dashboard");
      return;
    }

    alert(res.detail || "Login failed");
  };

  // 🔒 CONFIRM FORCE LOGOUT
  const confirmLogin = async () => {
    const res = await apiRequest("/confirm-login/", "POST", {
      session_id: sessionConflict.id,
    });

    if (res.access) {
      localStorage.setItem("access", res.access);
      localStorage.setItem("refresh", res.refresh);
      setShowPopup(false);
      navigate("/dashboard");
    } else {
      alert("Unable to confirm login");
    }
  };

  return (
    <>
      <h2>Login</h2>

      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button onClick={submit}>Login</button>

      {/* 🔥 SESSION CONFLICT POPUP */}
      {showPopup && sessionConflict && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <h3>Account already logged in</h3>

            <p><b>IP:</b> {sessionConflict.ip_address}</p>
            <p><b>Device:</b> {sessionConflict.user_agent}</p>
            <p>
              <b>Login time:</b>{" "}
              {new Date(sessionConflict.login_time).toLocaleString()}
            </p>

            <div style={{ marginTop: 20 }}>
              <button onClick={() => setShowPopup(false)}>
                Cancel
              </button>

              <button
                style={{ marginLeft: 10 }}
                onClick={confirmLogin}
              >
                Sign out existing session
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* 🔧 styles */
const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const modalStyle = {
  background: "#fff",
  padding: 20,
  width: 400,
  borderRadius: 6,
};

export default Login;
