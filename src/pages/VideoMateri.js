import React from "react";


const VideoMateri = () => {
  return (
    <div style={styles.container} id="video">
      <h2 style={styles.title}>Materi Biologi: Sistem Pernapasan</h2>
      <video
        style={styles.video}
        controls
        src="/assets/videos/materi_biologi.mp4"
      >
        Your browser does not support the video tag.
      </video>
      <p style={styles.description}>
        Pelajari sistem pernapasan manusia secara lengkap melalui video ini!
      </p>
      <button
        style={styles.button}
        onClick={() => window.alert("Materi berikutnya segera hadir!")}
      >
        Materi Berikutnya
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  video: {
    width: "80%",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  description: {
    marginTop: "15px",
    fontSize: "16px",
    color: "#333",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#4CAF50",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default VideoMateri;
