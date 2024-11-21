import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home'; 
import Materi from './pages/Materi';
import Quiz from './pages/Quiz';
import Bab7 from './pages/bab7';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/materi" element={<Materi />} />
        <Route path="/quiz" element={<Quiz />} /> 
        <Route path="/bab7" element={<Bab7 />} /> 
      </Routes>
    </Router>
  );
}


export default App;