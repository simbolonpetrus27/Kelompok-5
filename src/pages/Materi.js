import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Materi.css';

const Materi = () => {
  const [biologies, setBiologies] = useState([]);
  const [featured, setFeatured] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const mockBiologies = [
      { id: 1, name: 'Sel', description: 'Menjelajah Sel', image: 'https://i.pinimg.com/564x/fd/b2/9f/fdb29f9d88998da72f0e1bd88ece1903.jpg', category: 'Bab 1', link: '/bab1' },
      { id: 2, name: 'Sistem Pernapasan', description: 'Memahami Sistem Pernapasan', image: 'https://i.pinimg.com/564x/37/0f/70/370f707e05bfc97095848c645a5a2a62.jpg', category: 'Bab 2', link: '/bab2' },
      { id: 3, name: 'Sistem Golongan Darah', description: 'Mengenal Sistem Golongan Darah', image: 'https://i.pinimg.com/564x/2f/30/8a/2f308aef28800761a43de843b59e75bb.jpg', category: 'Bab 3', link: '/bab3' },
      { id: 4, name: 'Metabolisme', description: 'Proses Metabolisme', image: 'https://i.pinimg.com/564x/3d/9c/56/3d9c5687645c78072073c3420d6bcbfa.jpg', category: 'Bab 4', link: '/bab4' },
      { id: 5, name: 'Genetika', description: 'Belajar Genetika', image: 'https://i.pinimg.com/564x/0e/2d/c8/0e2dc8167ed8f826d7ad024c78b9700a.jpg', category: 'Bab 5', link: '/bab5' },
      { id: 6, name: 'Jaringan Tumbuhan', description: 'Struktur Jaringan Tumbuhan', image: 'https://i.pinimg.com/564x/83/01/0c/83010c227ef48af9f40bcb6f07c4d526.jpg', category: 'Bab 6', link: '/bab6' },
      { id: 7, name: 'Evolusi', description: 'Konsep Evolusi', image: 'https://i.pinimg.com/564x/fc/13/54/fc13549ab8b0eb96a0bfc89a9dcb3c52.jpg', category: 'Bab 7', link: '/bab7' },
      { id: 8, name: 'Ekosistem', description: 'Hubungan Komponen Ekosistem', image: 'https://i.pinimg.com/564x/46/9b/98/469b985268c42b2c5cd9ed5eeb3a48db.jpg', category: 'Bab 8', link: '/bab8' },
      { id: 9, name: 'Sistem Pencernaan', description: 'Proses Pencernaan Makanan', image: 'https://i.pinimg.com/564x/44/2e/b2/442eb28311b639f01b9634e8b8c10e9b.jpg', category: 'Bab 9', link: '/bab9' },
      { id: 10, name: 'Reproduksi', description: 'Sistem Reproduksi', image: 'https://i.pinimg.com/564x/2b/98/4e/2b984ea93a30867c882a1f202d7934a0.jpg', category: 'Bab 10', link: '/bab10' },
      { id: 11, name: 'Sistem Saraf', description: 'Fungsi Sistem Saraf', image: 'https://i.pinimg.com/564x/b9/6f/07/b96f072a98263514561d4b0553f33b6d.jpg', category: 'Bab 11', link: '/bab11' },
      { id: 12, name: 'Imunologi', description: 'Mekanisme Sistem Imun', image: 'https://i.pinimg.com/564x/a9/8c/9b/a98c9b20ad9cbeb9df4e667cf5d0cc50.jpg', category: 'Bab 12', link: '/bab12' },
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

    setBiologies(mockBiologies);
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
      '.biologi-biology-card, .biologi-featured-card'
    );
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
