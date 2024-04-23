import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const ReviewCard = ({ id, title, author, content }) => {
    return (
        <div className='card'>
            <h2>{title}</h2>
            <p>id: {id}</p>
            <p>Author: {author}</p>
        
            <Link to={`/review/${id}`} className='learn'>Learn More</Link>
        </div>
    );
};

export default ReviewCard;
