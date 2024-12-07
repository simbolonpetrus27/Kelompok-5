import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
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
      setError('Email tidak valid. Masukkan email dengan format yang benar.');
      return;
    }

    
    if (formData.password !== formData.confirmPassword) {
      setError('Kata sandi tidak cocok.');
      return;
    }

    if (formData.password.length < 6) {
      setError('Kata sandi harus memiliki minimal 6 karakter.');
      return;
    }

    const userData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    
    localStorage.setItem('user', JSON.stringify(userData));
    alert(`Pendaftaran berhasil! Selamat datang, ${formData.name}`);
    navigate('/login');
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1>DAFTAR</h1>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nama Lengkap:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Masukkan nama lengkap Anda"
            />
          </div>
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
          <div className="form-group">
            <label>Konfirmasi Kata Sandi:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Konfirmasi kata sandi Anda"
            />
          </div>
          <button type="submit" className="register-button">Daftar</button>
        </form>
        <div className="register-link-container">
          <p className="register-link">Sudah punya akun? <a href="/login">Masuk di sini</a></p>
        </div>
      </div>
    </div>
  );
}

export default Register;
