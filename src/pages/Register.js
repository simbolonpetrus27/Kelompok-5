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

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
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
      setErrors((prev) => ({ ...prev, email: 'Email tidak valid. Masukkan email dengan format yang benar.' }));
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

    if (formData.password !== formData.confirmPassword) {
      setErrors((prev) => ({ ...prev, confirmPassword: 'Kata sandi tidak cocok.' }));
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
        <h1>REGISTER</h1>
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
          <div className="form-group">
            <label>Konfirmasi Kata Sandi:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Konfirmasi kata sandi Anda"
            />
            {errors.confirmPassword && (
              <div className="tooltip-warning">{errors.confirmPassword}</div>
            )}
          </div>
          <button type="submit" className="register-button">Daftar</button>
        </form>
        <div className="register-link-container">
          <p className="register-link">
            Sudah punya akun? <a href="/login">Masuk di sini</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
