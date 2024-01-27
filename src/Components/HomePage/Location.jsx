
import React from 'react';
import './Dashboard.css';
import { CiLogout } from "react-icons/ci";

const Location = () => {
  const handleLogout = () => {

    window.location.href = '/';
  };
  return (
    <div className="location-container">
      <nav className="navbar">
        <ul>
        <li><button onClick={handleLogout} className="logout-button"><CiLogout /></button></li>
          <li><a href="/dashboard">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/locations">Locations</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
      <div className="LocContent">
        <div className="content-left">
          <h1 className="loc-header">Branches of Angel's Burger in Philippines</h1>
          <p className="tagline">Angel's Burger now has over 1,300 branches nationwide.</p>
          <div className="branches-list-container">
            <div className="luzon">
              <h2>LUZON BRANCHES:</h2>
              <ul>
                <li>MANILA</li>
                <li>MARIKINA</li>
                <li>QUEZON CITY</li>
                <li>BAGUIO</li>
                <li>TONDO</li>
                <li>CAVITE</li>
                <li>BULACAN</li>
                <li>BATAAN</li>
                <li>TARLAC</li>
                <li>ZAMBALES</li>
                <li>AND NUEVA ECIJA</li>
              </ul>
            </div>
            <div className="visayas">
              <h2>VISAYAS BRANCHES:</h2>
              <ul>
                <li>CEBU</li>
                <li>BOHOL</li>
                <li>SAMAR</li>
                <li>LEYTE</li>
                <li>SIQUIJOR</li>
                <li>BACOLOD</li>
                <li>ILOILO</li>
                <li>AND NEGROS ORIENTAL</li>
              </ul>
            </div>
            <div className="mindanao">
              <h2>MINDANAO BRANCHES:</h2>
              <ul>
                <li>DAVAO</li>
                <li>GENERAL SANTOS</li>
                <li>ZAMBOANGA</li>
                <li>ILIGAN</li>
                <li>CAGAYAN DE ORO</li>
                <li>OZAMIZ</li>
                <li>COTABATO</li>
                <li>AND BUTUAN</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content-right">
          <img
            src={require('../../Components/Assets/map.jpg')}
            alt="Angels Burger Branches Map"
            className="branches-map"
          />
        </div>
      </div>
    </div>
  );
};

export default Location;
