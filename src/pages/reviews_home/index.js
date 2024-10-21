import React, { useState } from 'react';
import './style.css';
import ReviewCardHome from '../../components/review_card_home'; 
import reviews from '../../data/reviews';
import Footer from '../../components/footer';

const ReviewsHome = () => {
    const [selectedGenre, setSelectedGenre] = useState('All');

    const handleGenreChange = (genre) => {
        setSelectedGenre(genre);
    };

    const filteredReviews = selectedGenre === 'All' ? reviews : reviews.filter(review => review.genre === selectedGenre);

    return (
        <div className='reviews'>
            <h1>Book Reviews lots</h1>
            
            <nav>
                <ul>
                    <li><button onClick={() => handleGenreChange('All')}>All</button></li>
                    <li><button onClick={() => handleGenreChange('Fiction')}>Fiction</button></li>
                    <li><button onClick={() => handleGenreChange('Crime')}>Crime</button></li>
                    <li><button onClick={() => handleGenreChange('Romance')}>Romance</button></li>
                    <li><button onClick={() => handleGenreChange('Fantasy')}>Fantasy</button></li>
                    <li><button onClick={() => handleGenreChange('Thriller')}>Thriller</button></li>
                    <li><button onClick={() => handleGenreChange('Biography')}>Biography</button></li>
                </ul>
            </nav>

            <div className='review_cards_container'>
                {filteredReviews.map((review, index) => (
                    <ReviewCardHome key={index} {...review} />
                ))}
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default ReviewsHome;
