import React from 'react';
import './style.css';
import ReviewCard from '../../components/review_card'; 
import reviews from '../../data/reviews';

const LatestReviews = ({ limit }) => {
    const latestReviews = reviews.slice(0, limit);

    return (
        <div className='latest_reviews'>
            <h1>Latest Reviews </h1>
            <div className='review_cards_container'>
                {latestReviews.map((review, index) => (
                    <ReviewCard key={index} {...review} />
                ))}
            </div>
        </div>
    );
};

export default LatestReviews;
