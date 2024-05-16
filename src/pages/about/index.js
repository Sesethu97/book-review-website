import React from 'react';
import './style.css';
import AboutImage from '../../images/bookreview.jpg'

const About = () => {
    return(
        <div className='about'>
            <div className='about_image'>
                <img src={AboutImage} className='about_image'/>
            </div>
            <div className='about_tag'>
                <h1>About Us</h1>
                <p> At Readers Choice, we believe in the transformative power of literature. Our team of passionate readers and writers is dedicated to sharing our love for books and fostering a vibrant community of book enthusiasts.</p>
                 <p>From classic novels to contemporary bestsellers, we offer honest and thought-provoking reviews that aim to inform, entertain, and inspire readers of all backgrounds.</p>
               
            
            </div>

        </div>
    )
}
export default About;