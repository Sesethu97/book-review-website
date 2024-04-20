import React from 'react';
import './style.css';
import logo from '../../images/logo.png';
import { BiSolidSearch } from "react-icons/bi";
import { MdFavorite } from "react-icons/md";
import Landing from '../../pages/landing';
import About from '../../pages/about';

const TopNav = () => {
    return(
        <section>
            <nav>
                <div className='logo'>
                    <img src={logo} alt='Logo' className='logo' />
                </div>
                <ul>
                    <li><a href='#/Home'>Home</a></li>
                    <li><a href='#/About'>About</a></li>
                    <li><a href='#/Lastest Review'>Featured</a></li>
                    <li><a href='#/Blog'>Blog</a></li>
                    <li><a href='#/Sign In'>Sign In</a></li>
                </ul>
                <div className='search_icon'>
                    <BiSolidSearch />
                    <MdFavorite />
                </div>
            </nav>
            <div className="section-wrapper">
                <Landing/>
                <About/>
            </div>
        </section>
    )
}
export default TopNav;
