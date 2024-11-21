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
      { id: 4, name: 'Transpor dan Pertukaran Zat pada Manusia', description: 'Mengupas Proses Transpor pada Manusia', image: 'https://i.pinimg.com/control2/736x/27/ab/b0/27abb0ae40efb9d0dbab4447769aab67.jpg', category: 'Bab 4', link: '/bab4' },
      { id: 5, name: 'Sistem Pertahanan Tubuh terhadap Penyakit', description: 'Mengenal Sistem Pertahanan Tubuh', image: 'https://i.pinimg.com/736x/7e/a7/43/7ea74307a47ca142bfc8fc3bd7df0582.jpg', category: 'Bab 5', link: '/bab5' },
      { id: 6, name: 'Mobilitas pada Manusia', description: 'Mempelajari Mobilitas pada Manusia', image: 'https://i.pinimg.com/736x/37/5d/d8/375dd8b017ef38867211bc5a01467379.jpg', category: 'Bab 6', link: '/bab6' },
      { id: 7, name: 'Hormon dalam Reproduksi Manusia', description: 'Peran Hormon dalam Reproduksi', image: 'https://i.pinimg.com/736x/cc/f0/5c/ccf05c13fa166e6538188f96a860a47c.jpg', category: 'Bab 7', link: '/bab7' },
      { id: 8, name: 'Tumbuh kembang Makhluk Hidup', description: 'Faktor Tumbuh Kembang Makhluk Hidup', image: 'https://i.pinimg.com/736x/48/63/b9/4863b9f25655ca315ef5275cb2c5adf8.jpg', category: 'Bab 8', link: '/bab8' },
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
