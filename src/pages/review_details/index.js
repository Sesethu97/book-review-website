
import React from 'react';
import { useParams } from 'react-router-dom';
import reviews from '../../data/reviews'; 

const ReviewDetails = () => {
    const { id } = useParams();

    const review = reviews.find(review => review.id === id);

    return (
        <div>
            <h1>Review Details</h1>
            {review && ( 
                <>
                    <p>Title: {review.title}</p>
                    <p>{review.image}</p>
                    <p>Author: {review.author}</p>
                    <p>Content: {review.content}</p>
                </>
            )}
        </div>
    );
};

export default ReviewDetails;
