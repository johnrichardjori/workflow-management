// src/components/Dashboard.js
import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <h2>Please log in first.</h2>;
  }

  return <h2>Welcome to the dashboard!</h2>;
};

export default Dashboard;
