import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn'); 
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [navigate]);

  const handleExploreClick = () => {
    navigate('/materi');
  };

  return (
    <div className="home">
      <div className="hero-section">
          <div className="search-box">
            <button onClick={handleExploreClick}>Explore Materi</button>
          </div>
        </div>
      </div>
    
  );
}

export default Home;
