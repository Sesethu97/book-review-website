import React from 'react';
import './App.css';
import TopNav from './components/top_nav';
import Home from './pages/home';
import About from './pages/about';
import ReviewDetails from './pages/review_details';
import Blogs from './pages/blogs';

import Reviews from './pages/reviews';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App background-pattern">
      
      <Router>
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/latest" element={<Reviews />} />
          <Route path="/review/:id" element={<ReviewDetails />} />
          <Route path="/blogs" element={<Blogs />} />

        </Routes>
      </Router>
  
    </div>
  );
}

export default App;
