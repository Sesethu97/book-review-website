import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { MenuBook } from '@mui/icons-material';

const TopNav = () => {
    return (
        <section>
            <nav>
                <div className='logo'>
                    <Link to="/">
                        <MenuBook style={{ cursor: 'pointer' }} /> 
                    </Link>
                </div>
                <ul>
                    <li><Link to="/latest">Book Reviews</Link></li> 
                    <li><Link to="/top-rated">Top Rated Books</Link></li> 
                    <li><Link to="/about">About</Link></li> 
                </ul>
            </nav>
        </section>
    );
}

export default TopNav;
