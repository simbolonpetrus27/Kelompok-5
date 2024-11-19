import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Kurikulum Belajar</h3>
          <p>Materi Dan Modul Belajar K13</p>
        </div>
        <div className="footer-section">
          <h3>Kontak</h3>
          <p>Email: info@BiologyLibretext.com</p>
          <p>Telepon: (021) 1234-5678</p>
        </div>
        <div className="footer-section">
          <h3>Ikuti Kami</h3>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Biology. Libretexts.</p>
      </div>
    </footer>
  );
}

export default Footer;
