// Dashboard.js
import React from 'react';
import './Dashboard.css';
import { CiLogout } from "react-icons/ci";

const Dashboard = () => {
  const handleLogout = () => {

    window.location.href = '/';
  };
  return (
    <div>
      <nav className="navbar">
        <ul>
        <li><button onClick={handleLogout} className="logout-button"><CiLogout /></button></li>
          <li><a href="/dashboard">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/locations">Locations</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
      <div className="content">
        <div className="welcome-section">
          <h1>Welcome to Angel's Burger</h1>
          <p>Your destination for delicious and satisfying burgers!</p>
        </div>

        <div className="burger-image">
          <img src={require('../../Components/Assets/1.jpeg')} alt="Angel's Burger" />
        </div>

        <div className="animated-box">
          <p className="animated-text">Explore our menu and find your favorite burger!</p>
          <button onClick={() => window.location.href = '/products'} className="explore-button">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
