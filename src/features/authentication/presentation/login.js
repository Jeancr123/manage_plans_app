import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/index.css";
import "./login.css";
import "@mdi/font/css/materialdesignicons.min.css";
import authenticate from "../data/authenticate";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleContinue = async () => {
    navigate("/plans_available");
  }

  const handleLogin = async () => {
    authenticate({username, password}, handleContinue, setError);
  };

  return (
    <div className="login-container">
      <div className="wider-card">
        <h1>Login</h1>
        <i className="mdi mdi-account-circle-outline mdi-48px"></i>
        <div className="login-form">
          <label htmlFor="username">Email:</label>
          <input
            type="text"
            id="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="error-message">{error}</p>}

          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
