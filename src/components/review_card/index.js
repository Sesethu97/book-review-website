    import React from 'react';
    import './style.css';
    import { Link } from 'react-router-dom';

    const ReviewCard = ({ id, title, author, image }) => {
        return (
            <div className='card'>
                <h2>{title}</h2>
                <img src={image} alt={title} /> 
                <p>Author: {author}</p>
            
                <Link to={`/review/${id}`} className='learn'>Learn More</Link>
            </div>
        );
    };

    export default ReviewCard;
