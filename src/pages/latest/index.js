import React from 'react';
import './style.css';
import ReviewCardHome from '../../components/review_card_home'; 
import reviews from '../../data/reviews';

const LatestReviews = ({ limit }) => {
    const latestReviews = reviews.slice(0, limit);

    return (
        <div className='latest_reviews_home'>
            <h1>Latest Reviews </h1>

            <div className='review_cards_container_home'>
                {latestReviews.map((review, index) => (
                    <ReviewCardHome key={index} {...review} />
                ))}
            </div>
        </div>
    );
};

export default LatestReviews;
