import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Standings from './components/Standings'; // TODO: Move to pages folder when restructuring

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/standings" element={<Standings />} />
          {/* TODO: Add more routes as needed */}
          {/* <Route path="/teams" element={<Teams />} /> */}
          {/* <Route path="/tournaments/:id" element={<TournamentDetail />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
