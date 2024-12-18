import React from "react";
import OTPAuthentication from "../components/OTPAuthentication";
import VideoUpload from "../components/VideoUpload";

function Home() {
  const [authenticated, setAuthenticated] = useState(false);

  const handleAuthentication = () => {
    setAuthenticated(true);
  };

  return (
    <div>
      <h1>Welcome to Video Upload</h1>
      {!authenticated ? (
        <OTPAuthentication onAuthenticated={handleAuthentication} />
      ) : (
        <VideoUpload />
      )}
    </div>
  );
}

export default Home;
