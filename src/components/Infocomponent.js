import React from 'react';
import vivekimage from '../images/Vivek(1).jpg'
import '../styles.css';

export default function Infocomponent() {
    return(
        <div>
            <div>
                <img src={vivekimage} alt="Vivek image" className='own-image'/>
                <div className='intro-content'>
                    <h1>Vivek Krishnan R</h1>
                    <p className="designation">Software Engineer</p>
                    <p>imvivekkr98@gmail.com</p>
                </div>
            </div>
            <div className='button-container'>
                <button type="button" className='email-button'>Email</button>
                <button type="button" className='linkedin-button'>LinkedIn</button>
            </div>
        </div>
    )
}