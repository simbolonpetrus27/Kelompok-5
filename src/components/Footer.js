import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
        <p>
      <a href="https://static.buku.kemdikbud.go.id/content/pdf/bukuteks/kurikulum21/Biologi-BS-KLS-XI.pdf" target="_blank">Unduh Buku Biologi Kelas XI Kurikulum 2013</a></p>
      <p>&copy; 2024 Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi</p>
      <p>Buku ini disusun sebagai sumber pembelajaran utama siswa SMA/MA, dilengkapi dengan penjelasan yang mendalam dan gambar ilustratif.</p>
      <p class="description"></p>
        </div>
        <div className="footer-section">
          <h3>Kontak</h3>
          <p>Email: info@BIONIK.com</p>
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
      <p>Kunjungi portal resmi <a href="https://buku.kemdikbud.go.id" target="_blank">buku.kemdikbud.go.id</a> untuk lebih banyak sumber daya pendidikan.</p>
        <p>&copy; 2024 BIONIK TEAM 5. BIONIK</p>
      </div>
    </footer>
  );
}

export default Footer;
