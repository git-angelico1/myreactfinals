
import React from 'react';
import './Dashboard.css';
import { CiLogout } from "react-icons/ci";

const Product = () => {
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
      <h1 className="menu-header">OUR MENU</h1>
      <div className='prodContent'>
        <div className="product-gallery">
          <div className="product-item">
            <img src={require('../../Components/Assets/cheesef.jfif')} alt="Cheesy Footlong" />
            <p className="P-item">Cheesy Footlong - 45 Pesos</p>
          </div>
          <div className="product-item">
            <img src={require('../../Components/Assets/cheeseb.jpg')} alt="Cheesy Burger" />
            <p className="P-item">Cheesy Burger - 30 Pesos</p>
          </div>
          <div className="product-item">
            <img src={require('../../Components/Assets/hungar.jfif')} alt="Hungarian Sausage" />
            <p className="P-item">Hungarian Sausage - 55 Pesos</p>
          </div>
          <div className="product-item">
            <img src={require('../../Components/Assets/reg.jpg')} alt="Regular Burger" />
            <p className="P-item">Regular Burger - 25 Pesos</p>
          </div>
          <div className="product-item">
            <img src={require('../../Components/Assets/egg.jfif')} alt="Egg Sandwich" />
            <p className="P-item">Egg Sandwich - 20 Pesos</p>
          </div>
          <div className="product-item">
            <img src={require('../../Components/Assets/mount.jpg')} alt="Mountain Dew" />
            <p className="P-item">Mountain Dew - 25 Pesos</p>
          </div>
          <div className="product-item">
            <img src={require('../../Components/Assets/water.jfif')} alt="Angels Water" />
            <p className="P-item">Angels Water - 20 Pesos</p>
          </div>
          <div className="product-item">
            <img src={require('../../Components/Assets/pesi.jpg')} alt="Pepsi" />
            <p className="P-item">Pepsi - 25 Pesos</p>
          </div>
          <div className="product-item">
            <img src={require('../../Components/Assets/sting.jfif')} alt="Sting" />
            <p className="P-item">Sting - 30 Pesos</p>
          </div>
          <div className="product-item">
            <img src={require('../../Components/Assets/7up.jpg')} alt="7up" />
            <p className="P-item">7up - 25 Pesos</p>
          </div>
          <div className="product-item">
            <img src={require('../../Components/Assets/mirinda.jpg')} alt="Mirinda" />
            <p className="P-item">Mirinda - 25 Pesos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
