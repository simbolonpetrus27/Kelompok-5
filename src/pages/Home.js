import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn'); // Check login status
    if (!isLoggedIn) {
      navigate('/'); // Redirect to login if not logged in
    }
  }, [navigate]);

  const handleExploreClick = () => {
    navigate('/materi');
  };

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Biology Libretexts</h1>
          <p>Eksplorasi Sains Tanpa Batas</p>
          <div className="search-box">
            <button onClick={handleExploreClick}>Explore Materi</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
