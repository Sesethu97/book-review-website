import React from 'react';
import './style.css';
import logo from '../../images/logo.png';
import { BiSolidSearch } from "react-icons/bi";
import { MdFavorite } from "react-icons/md";

import { Link } from 'react-router-dom';

const TopNav = () => {
    return(
        <section>
            <nav>
                <div className='logo'>
                    <img src={logo} alt='Logo' className='logo' />
                </div>
                <ul>
                    <li><a href='/'>Home</a></li>                
                    {/* <li><a href='/'>News & Articles</a></li> */}
                    <li><Link to="/latest">Book Reviews</Link></li> 
                    {/* <li><a href='/blogs'>Blogs</a></li> */}
                   
                </ul>
                <div className='search_icon'>
                    <BiSolidSearch />
                    <MdFavorite />
                </div>
            </nav>
        
        </section>
    )
}
export default TopNav;
