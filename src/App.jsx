import React from "react";
import "./App.scss";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const App = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <div className="App_container">
        <div className="App">
          <h1>Jen's</h1>
          <h2>Google OAuth Demo 🍔</h2>
          <GoogleLogin onSuccess={responseGoogle} onError={responseGoogle} />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default App;
