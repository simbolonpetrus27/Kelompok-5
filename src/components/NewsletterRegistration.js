
import React, { useState } from 'react';


const NewsletterRegistration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [school, setSchool] = useState('');
    const [tempat, setTempat] = useState('');
    const [district, setDistrict] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleSchoolChange = (event) => {
        setSchool(event.target.value);
    };
    const handleTempatChange = (event) => {
        setTempat(event.target.value);
    };
    const handleDistrictChange = (event) => {
        setDistrict(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage(`selamat datang, ${name}! Anda telah berhasil mendaftar di Institut Teknologi Del.`);
        setName('');
        setEmail('');
        setPassword('');
        setSchool('');
        setTempat('');
        setDistrict('');
    };
    
    return (
        <div className="container mt-5">
           
            <h2 className="text-center">Registration Form</h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                    type="text"
                    id="name"
                    className="form-control"
                    value={name}
                    onChange={handleNameChange}
                    required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input
                    type="password"
                    id="password"
                    className="form-control"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="school" className="form-label">School Name:</label>
                    <input
                    type="text"
                    id="school"
                    className="form-control"
                    value={school}
                    onChange={handleSchoolChange}
                    required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="tempat" className="form-label">School Location:</label>
                    <input
                    type="text"
                    id="tempat"
                    className="form-control"
                    value={tempat}
                    onChange={handleTempatChange}
                    required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="district" className="form-label">District:</label>
                    <input
                    type="text"
                    id="district"
                    className="form-control"
                    value={district}
                    onChange={handleDistrictChange}
                    required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
            {message && <div className="alert alert-success mt-3">{message}</div>}
        </div>
    );
};

export default NewsletterRegistration;