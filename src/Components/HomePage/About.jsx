
import React from 'react';
import './Dashboard.css';
import { CiLogout } from "react-icons/ci";

const About = () => {
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
      <div className="about">
        <h1>About Angel's Burger</h1>
        <p>
          Angel's Burger is your go-to destination for delicious and satisfying burgers. 
          With over 1,300 branches nationwide, we have been serving quality and affordable 
          meals to our customers.
        </p>
        <h2>Contact Details</h2>
        <ul>
          <li>Website: <a href="https://angelsburger.com">angelsburger.com</a></li>
          <li>Facebook: <a href="https://facebook.com/AngelsBurger">AngelsBurger</a></li>
          <li>Instagram: <a href="https://instagram.com/Angelsburger11">@Angelsburger11</a></li>
          <li>Email: <a href="https://yahoo.com/angelsburger@yahoo.com">angelsburger@yahoo.com</a></li>
          <li>Contact: 091234567890</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
