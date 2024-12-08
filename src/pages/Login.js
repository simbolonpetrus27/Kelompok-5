
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

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Masukkan email yang valid');
      return;
    }

   
    if (formData.password.length < 6) {
      setError('Kata sandi harus memiliki minimal 6 karakter.');
      return;
    }

  
    const savedUser = JSON.parse(localStorage.getItem('user')); 
    if (
      savedUser &&
      formData.email === savedUser.email &&
      formData.password === savedUser.password
    ) {
      alert('Login berhasil! Selamat datang.');
      localStorage.setItem('isLoggedIn', 'true'); 
      navigate('/tryout'); 
    } else {
      setError('Email atau kata sandi salah. Silakan coba lagi.');
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
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Masukkan email Anda"
            />
          </div>
          <div className="form-group">
            <label>Kata Sandi:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Masukkan kata sandi Anda"
            />
          </div>
          <button type="submit" className="login-button">Masuk</button>
        </form>
        <div className="login-link-container">
          <p className="login-link">
            Belum punya akun? <a href="/register">Daftar di sini</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
