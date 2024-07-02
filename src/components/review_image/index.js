import React from 'react';
import { Link } from 'react-router-dom';

const ReviewImage = ({ id, image, title }) => {
    return (
        <Link to={`/review/${id}`}>
            <img src={image} alt={title} className="review-image" />
        </Link>
    );
};

export default ReviewImage;
