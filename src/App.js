import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Components/LoginForm/Login';
import Dashboard from './Components/HomePage/Dashboard';
import About from './Components/HomePage/About';
import Product from './Components/HomePage/Product';
import Location from './Components/HomePage/Location';

const LoginFormWithNavigation = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate('/dashboard');
  };

  return <Login onLoginSuccess={handleLoginSuccess} />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/locations" element={<Location />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<LoginFormWithNavigation />} />
      </Routes>
    </Router>
  );
}

export default App;




