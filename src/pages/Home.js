import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const [biologyTopics, ] = useState([]);
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
        <div className="hero-content">
          <h1>BIONIK</h1>
          <p>Biologi Online Kelas Sebelas</p>
          <div className="search-box">
            <button onClick={handleExploreClick}>Explore Materi</button>
          </div>
        </div>
      </div>
        <div className="biology-list">
          {biologyTopics.map((topic) => (
            <div key={topic.id} className="biology-card">
              <img src={topic.image} alt={topic.name} />
              <h3>{topic.name}</h3>
              <p>{topic.description}</p>
              <p>Rating: {topic.rating}</p>
              <p>Category: {topic.category}</p>
            </div>
          ))}
        </div>
      </div>
  
  );
}

export default Home;