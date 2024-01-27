import React, { useState } from 'react';
import { FaRegUserCircle, FaLock } from 'react-icons/fa';
import './LoginForm.css';

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    
    const correctUsername = 'Angelico';
    const correctPassword = '12345';

    
    if (username === correctUsername && password === correctPassword) {
      onLoginSuccess();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="wrapper"> 
      <form onSubmit={handleLogin}>
        <img src={require('../Assets/logo.png')} alt="Angel's Burger Logo" className="logo" />
        <h1 className="welcometext">Login</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <FaRegUserCircle className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FaLock className="icon" />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />Remember Me
          </label>
          <a href="#">Forgot Password?</a>
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default Login;
