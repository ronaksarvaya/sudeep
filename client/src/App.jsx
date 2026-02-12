import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/bookmarks" element={<div className="container" style={{ padding: '2rem' }}>Bookmarks Feature Coming Soon</div>} />
          </Routes>
        </main>
        <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)', borderTop: '1px solid var(--border-color)', backgroundColor: 'white' }}>
          &copy; {new Date().getFullYear()} InternshipHub. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
