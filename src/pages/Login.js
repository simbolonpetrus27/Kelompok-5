import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Reset error for the specific field
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrors((prev) => ({
        ...prev,
        email: 'Email tidak valid. Masukkan email dengan format yang benar.',
      }));
      return;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      setErrors((prev) => ({
        ...prev,
        password: 'Kata sandi harus memiliki minimal 8 karakter, termasuk huruf kapital, huruf kecil, angka, dan tanda baca.',
      }));
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
      setErrors((prev) => ({
        ...prev,
        password: 'Email atau kata sandi salah. Silakan coba lagi.',
      }));
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="subtitle-container">
          <h1 className="subtitle">LOGIN</h1>
        </div>
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
            {errors.email && <div className="tooltip-warning">{errors.email}</div>}
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
            {errors.password && <div className="tooltip-warning">{errors.password}</div>}
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
