import React, { useState } from "react";
import { sendOtp, verifyOtp } from "../api/otp";

function OTPAuthentication({ onAuthenticated }) {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);

  const handleSendOtp = async () => {
    try {
      await sendOtp(email);
      setStep(2);
    } catch (error) {
      alert("Error sending OTP.");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await verifyOtp(email, otp);
      if (response.data.success) {
        onAuthenticated();
      } else {
        alert("Invalid OTP");
      }
    } catch (error) {
      alert("Error verifying OTP.");
    }
  };

  return step === 1 ? (
    <div>
      <h2>Enter your Email</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleSendOtp}>Send OTP</button>
    </div>
  ) : (
    <div>
      <h2>Enter OTP</h2>
      <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
      <button onClick={handleVerifyOtp}>Verify OTP</button>
    </div>
  );
}

export default OTPAuthentication;
