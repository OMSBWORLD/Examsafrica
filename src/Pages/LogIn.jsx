import React from 'react';
import '../Styles/Login.css'
import home from '../assets/exams2.png';
import { Link } from 'react-router-dom';
import left from '../assets/left.png'
import right from '../assets/right.png'

function LogIn(){
    return(
        <div>
             <div className='s-nav-parent'>
                <div className='s-nav'>
                    <div className='nav-one'><Link to='/'><img src={home}/></Link></div>
                    <div>Don’t have an account? Sign up <Link to='/register'>here</Link>  </div>
                </div>
            </div>
            <div className='login-parent'>
                <div className='login'>
                    <div className='login-one'>
                        <h1>Login to Continue</h1>
                    </div>
                    <div className='login-two'>
                        <div className='login-sub-one'>
                            <label>Username</label>
                            <input type="text" />
                            <label>Password</label>
                            <input type="password" />
                            <button style={{color: '#ffffff', background: '#1178FF', height: '50px', width: '60%', border: 'none',}}> Login</button>
                        </div>
                        <div className='login-sub-two'>
                            <img src={right} alt="" /><img src={left} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LogIn;