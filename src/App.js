import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home'; 
import Materi from './pages/Materi';
import Quiz from './pages/Quiz';
import Bab1 from './pages/bab1';
import Bab2 from './pages/bab2';
import Bab3 from './pages/bab3';
import Bab4 from './pages/bab4';
import Bab5 from './pages/bab5';
import Bab6 from './pages/bab6';
import Bab7 from './pages/bab7';
import Bab8 from './pages/bab8';
import LatihanSoal from "./pages/latihansoal";
import LatihanSoal1 from "./pages/LatihanSoal1";
import LatihanSoal4 from "./pages/LatihanSoal4";
import LatihanSoal6 from "./pages/LatihanSoal6";
import LatihanSoal7 from "./pages/LatihanSoal7";
import LatihanSoal8 from "./pages/LatihanSoal8";
import VideoMateri from './pages/VideoMateri';

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
        <Route path="/bab1" element={<Bab1 />} />
        <Route path="/bab2" element={<Bab2 />} />
        <Route path="/bab3" element={<Bab3 />} />
        <Route path="/bab4" element={<Bab4 />} />
        <Route path="/bab5" element={<Bab5 />} />
        <Route path="/bab6" element={<Bab6 />} />
        <Route path="/bab7" element={<Bab7 />} /> 
        <Route path="/bab8" element={<Bab8 />} />
        <Route path="/latihansoal" element={<LatihanSoal />} />
        <Route path="/latihansoal1" element={<LatihanSoal1 />} />
        <Route path="/latihansoal4" element={<LatihanSoal4 />} />
        <Route path="/latihansoal6" element={<LatihanSoal6 />} />
        <Route path="/latihansoal7" element={<LatihanSoal7 />} />
        <Route path="/latihansoal8" element={<LatihanSoal8 />} />
        <Route path="/vidio" element={<VideoMateri />} />
      </Routes>
    </Router>
  );
}


export default App;