import React from "react";
import "./latihansoal.css";

const LatihanSoal = () => {
  const babList = [
    { id: 1, title: "Bab 1", description: "Struktur dan Fungsi Sel" },
    { id: 2, title: "Bab 2", description: "Pergerakan Zat melalui Membran sel" },
    { id: 3, title: "Bab 3", description: "Proses Pengaturan pada Tumbuhan" },
    { id: 4, title: "Bab 4", description: "Transpor dan Pertukaran Zat pada Manusia" },
    { id: 5, title: "Bab 5", description: "Sistem Pertahanan Tubuh terhadap Penyakit" },
    { id: 6, title: "Bab 6", description: "Mobilitas pada Manusia" },
    { id: 7, title: "Bab 7", description: "Hormon dalam Reproduksi Manusia" },
    { id: 8, title: "Bab 8", description: "Tumbuh Kembang Makhluk Hidup" },
  ];

  return (
    
    <div className="latihan-soal-container">
    <video className="video-background" autoPlay loop muted>
      <source src="background.mp4" type="video/mp4" />
    </video>
      <h1>Siap Mengasah Kemampuanmu?</h1>
      <p>Tingkatkan pemahamanmu dengan menjelajahi berbagai bab di bawah ini. Pilih materi favoritmu 
      dan mulai tantangan serunya!</p>
      <div className="bab-list">
        {babList.map((bab) => (
          <div key={bab.id} className="bab-card">
            <h2>{bab.title}</h2>
            <p>{bab.description}</p>
            <button onClick={() => alert(`Mulai soal ${bab.title}`)}>
              Kerjakan Soal
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatihanSoal;
