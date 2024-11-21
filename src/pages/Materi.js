import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Materi.css';

const Materi = () => {
  const [biologies, setBiologies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const mockBiologies = [
      { id: 1, name: 'Menjelajah Sel', description: 'Menjelajahi Sel Lebih Dalam', image: 'https://i.pinimg.com/564x/fd/b2/9f/fdb29f9d88998da72f0e1bd88ece1903.jpg', category: 'Bab 1', link: '/bab1' },
      { id: 2, name: 'Pergerakan Zat melalui Membran Sel', description: 'Mempelajari Pergerakan Zat', image: 'https://i.pinimg.com/564x/37/0f/70/370f707e05bfc97095848c645a5a2a62.jpg', category: 'Bab 2', link: '/bab2' },
      { id: 3, name: 'Proses Pengaturan pada Tumbuhan', description: 'Memahami Pengaturan pada Tumbuhan', image: 'https://i.pinimg.com/564x/2f/30/8a/2f308aef28800761a43de843b59e75bb.jpg', category: 'Bab 3', link: '/bab3' },
      { id: 4, name: 'Transpor dan Pertukaran Zat pada Manusia', description: 'Mengupas Proses Transpor pada Manusia', image: 'https://i.pinimg.com/564x/3d/9c/56/3d9c5687645c78072073c3420d6bcbfa.jpg', category: 'Bab 4', link: '/bab4' },
      { id: 5, name: 'Sistem Pertahanan Tubuh terhadap Penyakit', description: 'Mengenal Sistem Pertahanan Tubuh', image: 'https://i.pinimg.com/564x/0e/2d/c8/0e2dc8167ed8f826d7ad024c78b9700a.jpg', category: 'Bab 5', link: '/bab5' },
      { id: 6, name: 'Mobilitas pada Manusia', description: 'Mempelajari Mobilitas pada Manusia', image: 'https://i.pinimg.com/564x/83/01/0c/83010c227ef48af9f40bcb6f07c4d526.jpg', category: 'Bab 6', link: '/bab6' },
      { id: 7, name: 'Hormon dalam Reproduksi Manusia', description: 'Peran Hormon dalam Reproduksi', image: 'https://i.pinimg.com/564x/fc/13/54/fc13549ab8b0eb96a0bfc89a9dcb3c52.jpg', category: 'Bab 7', link: '/bab7' },
      { id: 8, name: 'Tumbuh kembang Makhluk Hidup', description: 'Faktor Tumbuh Kembang Makhluk Hidup', image: 'https://i.pinimg.com/564x/46/9b/98/469b985268c42b2c5cd9ed5eeb3a48db.jpg', category: 'Bab 8', link: '/bab8' },
    ];

    setBiologies(mockBiologies);

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

    const hiddenElements = document.querySelectorAll('.biologi-biology-card');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="biologi-biology-section">
        <div className="container">
          <div className="section-header">
            <h2>Materi Biologi</h2>
          </div>
          <div className="biology-grid">
            {biologies.map((biology) => (
              <div key={biology.id} className="biologi-biology-card">
                <div className="card-image">
                  <img src={biology.image} alt={biology.name} />
                  <div className="card-category">{biology.category}</div>
                </div>
                <div className="card-content">
                  <h3>{biology.name}</h3>
                  <p>{biology.description}</p>
                  <button
                    className="detail-btn"
                    onClick={() => navigate(biology.link)}
                  >
                    Lihat Detail
                  </button>
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
