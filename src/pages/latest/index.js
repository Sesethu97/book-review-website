import React, { useState } from 'react';
import './style.css';
import ReviewCard from '../../components/review_card'; 
import reviews from '../../data/reviews';

const LatestReviews = () => {
    const [selectedGenre, setSelectedGenre] = useState('All');

    const handleGenreChange = (event) => {
        setSelectedGenre(event.target.value);
    };

    const filteredReviews = selectedGenre === 'All' ? reviews : reviews.filter(review => review.genre === selectedGenre);

    return (
        <div className='latest_reviews'>
            <h1>Latest Reviews</h1>
            <div className="genre_dropdown">
                <label htmlFor="genre">Select Genre:</label>
                <select id="genre" value={selectedGenre} onChange={handleGenreChange}>
                    <option value="All">All</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Crime">Crime</option>
                    <option value="Romance">Romance</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Biography">Biography</option>
                </select>
            </div>
            <div className='review_cards_container'>
                {filteredReviews.map((review, index) => (
                    <ReviewCard key={index} {...review} />
                ))}
            </div>
        </div>
    );
};

export default LatestReviews;
