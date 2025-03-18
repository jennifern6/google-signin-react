import React from "react";
import "./App.scss";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const App = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <GoogleOAuthProvider clientId="Y897075902683-hhamaglgrp65v3gfrgajsp6bckhdvhia.apps.googleusercontent.com">
      <div className="App_container">
        <div className="App">
          <h2>Jen's Google OAuth Demo</h2>
          <GoogleLogin onSuccess={responseGoogle} onError={responseGoogle} />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default App;
