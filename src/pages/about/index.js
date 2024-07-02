import React from 'react';
import './style.css';
import AboutImage from '../../images/bookreview.jpg'

import books from '../../images/books.png';
import Footer from '../../components/footer';
import LatestReviews from '../latest';

const About = () => {
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
            <div className='about'>
            <div className='about_image'>
                <img src={AboutImage} className='about_image'/>
            </div>
            <div className='about_tag'>
                <h1>About Us</h1>
                <p> At Readers Choice, we believe in the transformative power of literature. Our team of passionate readers and writers is dedicated to sharing our love for books and fostering a vibrant community of book enthusiasts.</p>
                 <p>From classic novels to contemporary bestsellers, we offer honest and thought-provoking reviews that aim to inform, entertain, and inspire readers of all backgrounds.</p>
               
            
            </div>

            </div> 

            <div className="book_reviews">
                <LatestReviews limit={4} />
            </div> 
            <Footer />
        </div>
    );
};

export default About;












