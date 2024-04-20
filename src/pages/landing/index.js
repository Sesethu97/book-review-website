import React from 'react';
import './style.css';
import books from '../../images/books.png';
import Footer from '../../components/footer';

const Landing = () => {
    return(
        <div className='main'>
            <div className='book_body'>
                   
                        <h1>Readers Choice Book Reviews</h1>
                    
                   
                        <h2>Find Your next Great Read</h2>
                    
                   
                    <p> ertyghukjil ertyuhkij wertyui esdfghjk</p>
                    <a href='#'className='book_btn'>Learn more</a>
            </div>

             
            
           
           
            <div className='image'>
                <img src={books} className='image'/>
            </div>
            <Footer/>            
        </div>
    );
};

export default Landing; 
