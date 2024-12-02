import React from "react";
import { useNavigate } from "react-router-dom";
import "./VideoMateri.css";


const VideoMateri = () => {
  const navigate = useNavigate();

  const babList = [
    { id: 1, title: "Bab 1", description: "Struktur dan Fungsi Sel", link: "/VideoMateri1" },
    { id: 2, title: "Bab 2", description: "Pergerakan Zat melalui Membran sel", link: "/VidepMateri2" },
    { id: 3, title: "Bab 3", description: "Proses Pengaturan pada Tumbuhan", link: "/VideoMateri3" },
    { id: 4, title: "Bab 4", description: "Transpor dan Pertukaran Zat pada Manusia", link: "/VideoMateri4" },
    { id: 5, title: "Bab 5", description: "Sistem Pertahanan Tubuh terhadap Penyakit", link: "/VideoMateri5" },
    { id: 6, title: "Bab 6", description: "Mobilitas pada Manusia", link: "/VideoMateri6" },
    { id: 7, title: "Bab 7", description: "Hormon dalam Reproduksi Manusia", link: "/VideoMateri7" },
    { id: 8, title: "Bab 8", description: "Tumbuh Kembang Makhluk Hidup", link: "/VideoMateri8" },
  ];

  return (
    <div className="Video-Materi-container">
      <video className="video-background" autoPlay loop muted>
        <source src="background.mp4" type="video/mp4" />
      </video>
      <h1>Pelajari sistem pernapasan manusia secara lengkap melalui video ini!</h1>
      <div className="bab-list">
        {babList.map((bab) => (
          <div key={bab.id} className="bab-card">
            <h2>{bab.title}</h2>
            <p>{bab.description}</p>
            <button onClick={() => navigate(bab.link)}>Tonton Video</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoMateri;
