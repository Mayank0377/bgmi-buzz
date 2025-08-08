import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StandingsPage from './pages/StandingsPage';
import AdminPage from './pages/AdminPage';
import AdminDashboard from './pages/AdminDashboard';
import TeamsPage from './pages/TeamsPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/standings" element={<StandingsPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/teams" element={<TeamsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
