import React from 'react';
import '../Styles/Footer.css';
import { Link } from 'react-router-dom'; 
import home from '../assets/exams 1.png';
import ln from '../assets/linkedin 1.png';
import tw from '../assets/twitter 1.png';
import insta from '../assets/instagram 1.png';
import fb from '../assets/facebook 1.png';


function Footer(){
    return(
        <div>
                <div>
                <div className='last'>
                    <div className='last-one'>
                        <div className='last-sub-one'>
                            <h3>Main</h3>
                            <p><Link to='/'>Home</Link></p>
                        </div>
                        <div className='last-sub-two'>
                            <h3>Need Help</h3>
                            <p><Link to='/contact'>Contact Us</Link></p>
                            <p><Link to='/faq'>FAQ</Link></p>
                        </div>
                        <div className='last-sub-three'>
                            <h3>Features</h3>
                            <p>Categories</p>
                            <p>Past Questions</p>
                            <p>Subjects</p>
                        </div>
                        <div className='last-sub-four'>
                            <h3>Informative</h3>
                            <p> <Link to='/blog'>Blog</Link></p>
                        </div>
                    </div>
                    <div className='last-two'><img src={home}/></div>
                    <div className='last-three'>We Will Open The World Of Knowledge For You! This is the latest online examination system you will ever need!<br/> With our easy online exam site, you will set up your own engaging exams that fit any kind of difficulty level and be a <br/>learning expert.</div>
                    <div className='last-four-parent'>
                    <div className='last-four'>
                        <Link to='https://www.linkedin.com/company/exams-africa/'><img src={ln} alt="" /></Link>
                        <Link to='https://exams.africa/#0'><img src={insta} alt="" /></Link>
                        <Link to='https://www.instagram.com/examsafrica/'><img src={tw} alt="" /></Link>
                        <Link to='https://exams.africa/#0'><img src={fb} alt="" /></Link>
                    </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className='footer'><p>&copy;  2022 All Rights reserved by Exams Africa</p></div>
            </footer>
        </div>
    )
}

export default Footer;