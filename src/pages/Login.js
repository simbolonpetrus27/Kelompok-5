import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem('user')); 

    if (
      savedUser &&
      formData.email === savedUser.email &&
      formData.password === savedUser.password
    ) {
      alert('Login successful!');
      localStorage.setItem('isLoggedIn', 'true'); // Menandakan login berhasil
      navigate('/tryout'); //  ke halaman tryout
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="subtitle-container">
          <h1 className="subtitle">LOGIN</h1>
        </div>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="login-link-container">
          <p className="login-link">
            Don't have an account? <a href="/register">Register Here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;