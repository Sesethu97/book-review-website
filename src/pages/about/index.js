import React from 'react';
import './style.css';
import AboutImage from '../../images/bookreview.jpg'

const About = () => {
    return(
        <div className='about'>
            <div className='about_image'>
                <img src={AboutImage}/>
            </div>
            <div className='about_tag'>
                <h1>About Us</h1>
                <p>dretfgyhbjnk erdftvgybhuj cfvtgybhnu fgbhnj</p>
               
                <a href='#' className='about_btn'>Learn More</a>
            
            </div>

        </div>
    )
}
export default About;