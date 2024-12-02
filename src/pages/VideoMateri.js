import React from "react";
import "./VideoMateri.css";

const VideoMateri = () => {
  const videoList = [
    {
      id: 1,
      title: "Bab 1 : Menjelajah Sel",
      description: "Menjelajahi Sel Lebih Dalam",
      videoUrl: (
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/Xxm6xtjsFx0?si=uoMgVaGJGH0hr2_Y"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
    },
    {
      id: 2,
      title: "Bab 2 : Pergerakan Zat melalui Membran Sel",
      description: "Mempelajari Pergerakan Zat",
      videoUrl: (
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/vDFBJmSH4fs?si=Ma3TwiinnlBmHCm2"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
    },
    {
      id: 3,
      title: "Bab 3 : Proses Pengaturan pada Tumbuhan",
      description: "Proses Pengaturan pada Tumbuhan",
      videoUrl: (
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/f7uAhLJba6g?si=jNdfRBVDy-M8vBUs"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
    },
    {
      id: 4,
      title: "Bab 4 : Transpor dan Pertukaran Zat pada Manusia",
      description: "Mengupas Proses Transpor pada Manusia",
      videoUrl: (
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/dxRESjSNKV8?si=htCdaU8EWGgPEFLS"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
    },
    {
      id: 5,
      title: "Bab 5 : Sistem Pertahanan Tubuh terhadap Penyakit",
      description: "Mengenal Sistem Pertahanan Tubuh",
      videoUrl: (
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/aEqiCz00_Zs?si=WpUt6AHvqPST0G7n"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
    },
    {
      id: 6,
      title: "Bab 6 : Mobilitas pada Manusia",
      description: "Mempelajari Mobilitas pada Manusia.",
      videoUrl: (
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/sZFCYvLwsVk?si=L6QoUozIuPasPbj9"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
    },
    {
      id: 7,
      title: "Bab 7 : Hormon dalam Reproduksi Manusia",
      description: "Peran Hormon dalam Reproduksi",
      videoUrl: (
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/0QpjmNAsjow?si=e3BKpPrREStq0YNh"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
    },
    {
      id: 8,
      title: " Bab 8 : Tumbuh kembang Makhluk Hidup",
      description: "Faktor Tumbuh Kembang Makhluk Hidup",
      videoUrl: (
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/qflTCWocfbQ?si=WyZIYkIzTJRq9f12"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
    },
  ];

  return (
    <div className="video-materials">
      <h1 className="title">Kumpulan Video Materi</h1>
      <div className="video-list">
        {videoList.map((video) => (
          <div key={video.id} className="video-item">
            <h2 className="video-title">{video.title}</h2>
            <p className="video-description">{video.description}</p>
            <div className="video-frame">{video.videoUrl}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoMateri;
