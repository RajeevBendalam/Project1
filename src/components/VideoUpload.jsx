import React, { useState } from "react";
import { uploadVideo } from "../api/upload";
import { isWithinAllowedTime } from "../utils/timeValidation";

function VideoUpload() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    const isWithinSize = selectedFile.size <= 50 * 1024 * 1024; // 50MB
    const isWithinDuration = new Promise((resolve) => {
      const video = document.createElement("video");
      video.preload = "metadata";
      video.onloadedmetadata = () => {
        resolve(video.duration <= 120); // 2 minutes
      };
      video.src = URL.createObjectURL(selectedFile);
    });

    Promise.all([isWithinSize, isWithinDuration]).then(([sizeOk, durationOk]) => {
      if (sizeOk && durationOk) {
        setFile(selectedFile);
        setError("");
      } else {
        setError("Video must be under 2 minutes and 50MB");
        setFile(null);
      }
    });
  };

  const handleUpload = async () => {
    if (!isWithinAllowedTime()) {
      setError("You can only upload videos between 2 PM and 7 PM.");
      return;
    }

    if (!file) {
      setError("Please select a valid video.");
      return;
    }

    try {
      await uploadVideo(file);
      alert("Video uploaded successfully!");
    } catch (error) {
      setError("Error uploading video.");
    }
  };

  return (
    <div>
      <h2>Upload Video</h2>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button disabled={!file} onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
}

export default VideoUpload;
