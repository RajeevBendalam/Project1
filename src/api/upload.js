import axios from "axios";

// Function to upload the video
export const uploadVideo = (file) => {
  const formData = new FormData();
  formData.append("video", file);

  return axios.post("/api/upload-video", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
