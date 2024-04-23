import React from 'react';
import './App.css';
import TopNav from './components/top_nav';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import ReviewDetails from './pages/review_details';

import LatestReviews from './pages/latest/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App background-pattern">
      <div className="pattern pattern-top"></div> 
      <Router>
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/latest" element={<LatestReviews />} />
          <Route path="/review/:id" element={<ReviewDetails />} />
        </Routes>
      </Router>
      <div className="pattern pattern-bottom"></div>
    </div>
  );
}

export default App;
