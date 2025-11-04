import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Public Components
import Home from './pages/public/Home';
import About from './pages/public/About';
import Portfolio from './pages/public/Portfolio';
import Contact from './pages/public/Contact';

function App() {
  return (
    <Router>
      <Routes>  {/* Routes need to be wrapped in <Routes> */}
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;