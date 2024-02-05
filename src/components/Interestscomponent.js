import React from 'react';
import twitterlogo from '../images/twitter.png';
import facebooklogo from '../images/facebook-app-symbol.png';
import linkedinlogo from '../images/linkedin.png';
import githublogo from '../images/github.png';
import '../styles.css';

export default function Interestscomponent() {
    return(
        <div>
            <h2>Interests</h2>
            <p>Outside of my professional endeavors, I am passionate about various interests that enrich both 
               my personal and professional life. I find great joy in exploring the world through travel, 
               immersing myself in different cultures, and trying new cuisines. I also enjoy staying active through activities 
               like hiking, yoga, and cycling, which not only keep me physically fit but also provide mental rejuvenation. 
               As a lifelong learner, I constantly seek out opportunities to expand my knowledge and skills, whether it's 
               through reading books on diverse subjects, attending workshops, or engaging in thought-provoking conversations 
               with people from different backgrounds. Additionally, I have a deep appreciation for the arts, including music, 
               literature, and cinema, and love attending live performances and exhibitions whenever possible. These interests not 
               only fuel my creativity and curiosity but also enable me to approach challenges with a fresh perspective and maintain
               a balanced lifestyle.</p>
            <footer className='footer-items'>
                <img src={twitterlogo}/>
                <img src={facebooklogo} />
                <img src={linkedinlogo} />
                <img src={githublogo}/>
            </footer>
        </div>
    )
}