import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Materi.css';

const Materi = () => {
  const [destinations, setDestinations] = useState([]);
  const [featured, setFeatured] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const mockDestinations = [
      {
        id: 1,
        name: 'Sel',
        description: 'Menjelajah Sel',
        image: 'https://i.pinimg.com/564x/fd/b2/9f/fdb29f9d88998da72f0e1bd88ece1903.jpg',
        category: 'Bab 1',
        link: '/bab1',
      },
      {
        id: 2,
        name: 'Sistem Pernapasan Manusia',
        description: 'Memahami Sistem Pernapasan Manusia',
        image: 'https://i.pinimg.com/564x/37/0f/70/370f707e05bfc97095848c645a5a2a62.jpg',
        category: 'Bab 2',
        link: '/bab2',
      },
      {
        id: 3,
        name: 'Sistem Golongan Darah',
        description: 'Mengenal Sistem Golongan Darah',
        image: 'https://i.pinimg.com/564x/2f/30/8a/2f308aef28800761a43de843b59e75bb.jpg',
        category: 'Bab 3',
        link: '/bab3',
      },
    ];

    const mockFeatured = [
      {
        id: 5,
        name: 'Latihan Soal',
        description: 'Pahami Beberapa Bagian Dari Soal',
        image: 'https://i.pinimg.com/564x/51/05/b5/5105b58a62d7ae9fb99e288e83625365.jpg',
      },
      {
        id: 6,
        name: 'Try-Out',
        description: 'Uji Pemahaman Anda',
        image: 'https://i.pinimg.com/564x/98/54/78/985478d23ce8bf017cc05406c0c9fa7a.jpg',
      },
    ];

    setDestinations(mockDestinations);
    setFeatured(mockFeatured);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll(
      '.biologi-destination-card, .biologi-featured-card'
    );
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="biologi-destinations-section">
        <div className="container">
          <div className="section-header">
            <h2>Materi Biologi</h2>
          </div>
          <div className="destinations-grid">
            {destinations.map((destination) => (
              <div key={destination.id} className="biologi-destination-card">
                <div className="card-image">
                  <img src={destination.image} alt={destination.name} />
                  <div className="card-category">{destination.category}</div>
                </div>
                <div className="card-content">
                  <h3>{destination.name}</h3>
                  <p>{destination.description}</p>
                  <button
                    className="detail-btn"
                    onClick={() => navigate(destination.link)}
                  >
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="biologi-featured-section">
        <div className="container">
          <h2>Uji Kompetensi Anda</h2>
          <div className="featured-grid">
            {featured.map((item) => (
              <div key={item.id} className="biologi-featured-card">
                <div className="featured-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="featured-content">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <button className="explore-btn">Jelajahi</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Materi;
