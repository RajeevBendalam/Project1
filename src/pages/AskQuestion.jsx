import React from "react";
import OTPAuthentication from "../components/OTPAuthentication";
import VideoUpload from "../components/VideoUpload";

function AskQuestion() {
  const [authenticated, setAuthenticated] = useState(false);

  const handleAuthentication = () => {
    setAuthenticated(true);
  };

  return (
    <div>
      <h1>Ask Your Question with a Video</h1>
      {!authenticated ? (
        <OTPAuthentication onAuthenticated={handleAuthentication} />
      ) : (
        <VideoUpload />
      )}
    </div>
  );
}

export default AskQuestion;
