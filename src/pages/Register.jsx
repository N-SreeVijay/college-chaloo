import { useState } from "react";
import { apiRequest } from "../api/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const submit = async () => {
    const res = await apiRequest("/register/", "POST", form);
    alert(res.message || res.detail);
    if (res.message) {
      localStorage.setItem("email", form.email);
      navigate("/verify-otp");
    }
  };

  return (
    <>
      <h2>Register</h2>
      <input placeholder="Name" onChange={e => setForm({...form, name:e.target.value})}/>
      <input placeholder="Email" onChange={e => setForm({...form, email:e.target.value})}/>
      <input type="password" placeholder="Password" onChange={e => setForm({...form, password:e.target.value})}/>
      <button onClick={submit}>Register</button>
    </>
  );
}

export default Register;
