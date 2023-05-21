import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
import home from '../assets/exams2.png';


function Navbar(){
    return(
        <div className='nav-grand'>
        <div className='nav-parent'>
            <div className='nav-one'><Link to='/'><img src={home}/></Link></div>
            <div className='nav-two'>
            <div className='nav-two-one'>
                <Link to='/blog'>Blog</Link>
                <Link to='/faq'>FAQ</Link>
                <Link to='/contact'>Contact Us</Link>
            </div>
            <div className='nav-two-two'>
                <Link to='/register'><button style={{background: '#1178ff',color: '#ffffff', width: '100px', height:'35px', border: 'none'}}>Register</button> </Link>
                <Link to='/login'><button style={{background: '#ffffff',color: '#1178ff', width: '100px', height: '35px',  border: '2px solid #1178ff'}}>Log In</button> </Link>
            </div>
            </div>
        </div>
        </div>
    )
}
export default Navbar;