import { useState } from "react";
import { apiRequest } from "../api/api";
import { useNavigate } from "react-router-dom";

function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const verify = async () => {
    const email = localStorage.getItem("email");
    const res = await apiRequest("/verify-otp/", "POST", { email, otp });
    alert(res.message || res.detail);
    if (res.message) navigate("/login");
  };

  const resend = async () => {
    const email = localStorage.getItem("email");
    const res = await apiRequest("/resend-otp/", "POST", { email });
    alert(res.message || res.detail);
  };

  return (
    <>
      <h2>Verify OTP</h2>
      <input placeholder="Enter OTP" onChange={e => setOtp(e.target.value)} />
      <button onClick={verify}>Verify</button>
      <button onClick={resend}>Resend OTP</button>
    </>
  );
}

export default VerifyOtp;
