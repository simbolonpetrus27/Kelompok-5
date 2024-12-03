import './Footer.css';

function Footer() {
  const handleContactClick = () => {
    window.open("https://www.instagram.com/it.del?igsh=MW56YWkwaTVsb3d6", "_blank");
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section newsletter">
          <h3>Gabung Bersama Kami</h3>
          <p>Ikuti terus pembaruan informasi tentang Biologi Kelas XI </p>

          <div className="social-links">
            <a href="https://www.facebook.com/pustekkom" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/30/ffffff/facebook.png" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/kemendikdasmen?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/30/ffffff/instagram.png" alt="Instagram" />
            </a>
            <a href="https://x.com/Kemdikdasmen" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/30/ffffff/twitter.png" alt="Twitter" />
            </a>
          </div>
        </div>
        <div className="footer-section certification">
          <h3>Informasi Buku</h3>
          <p>
            Buku <a href="https://static.buku.kemdikbud.go.id/content/pdf/bukuteks/kurikulum21/Biologi-BS-KLS-XI.pdf" target="_blank">Biologi Kelas XI Kurikulum 2013</a> disusun oleh Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi.
          </p>
          <p>Buku ini dirancang sebagai sumber utama siswa SMA/MA.</p>
        </div>
        <div className="footer-section contact">
          <h3>Hubungi Kami</h3>
          <p>Alamat: Kampus IT DEL LAGUBOTI,SUMATERA UTARA</p>
          <p>Email: info@bionik.com</p>
          <p>Telepon: (021) 1234-5678</p>
          <button className="contact-button" onClick={handleContactClick}>
            Hubungi Kami
          </button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 BIONIK Team 5 PSW 1.</p>
        <p>Kunjungi <a href="https://buku.kemdikbud.go.id" target="_blank">buku.kemdikbud.go.id</a> untuk informasi lainnya.</p>
        <p>Kunjungi <a href="https://www.youtube.com/@GIAAcademy" target="_blank">Vidio Materi selengkapnya </a> untuk informasi lainnya.</p>
      </div>
    </footer>
  );
}

export default Footer;
