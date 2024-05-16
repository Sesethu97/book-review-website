// Home.js

import React from 'react';
import './style.css';
import books from '../../images/books.png';
import Footer from '../../components/footer';
import About from '../about';
import LatestReviews from '../latest';

const Home = () => {
    return (
        <div>
            <div className='main'>
                <div className='book_body'>
                    <h1>Readers Choice Book Reviews</h1>
                    <h2>Find Your next Great Read</h2>
                    <p>Welcome to your go-to destination for insightful book reviews and literary recommendations.</p>
                    <p>Whether you're a dedicated bibliophile searching for your next literary adventure or a casual reader seeking inspiration, our curated collection of reviews covers a diverse range of genres and themes. Dive into our world of words and discover the magic of storytelling.</p>
                
                </div>
                <div className='image'>
                    <img src={books} className='image' alt="Books" />
                </div>
            </div>
            <div className="book_about">
                <About />

            </div> 

            <div className="book_reviews">
                <LatestReviews limit={4} />
            </div> 
            <Footer />
        </div>
    );
};

export default Home;
