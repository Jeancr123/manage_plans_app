// AppBar.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./appBar.css";

const AppBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions, such as removing the token from storage
    sessionStorage.removeItem("jwtToken"); // Replace with your token storage method

    // Navigate to the login page or another appropriate destination
    navigate("/login");
  };

  return (
    <div className="app-bar">
      <span className="logout-text">Log out</span>
      <button className="logout-button" onClick={handleLogout} title="Log out">
        <i className="mdi mdi-exit-to-app mdi-48px"></i>
      </button>
    </div>
  );
};

export default AppBar;
