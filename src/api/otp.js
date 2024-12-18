import axios from "axios";

// Function to send OTP to the user's email
export const sendOtp = (email) => {
  return axios.post("/api/send-otp", { email });
};

// Function to verify the OTP entered by the user
export const verifyOtp = (email, otp) => {
  return axios.post("/api/verify-otp", { email, otp });
};
