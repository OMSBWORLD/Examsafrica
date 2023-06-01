import React from 'react';
import '../Styles/Home.css'
import { Link } from 'react-router-dom';
import e1 from '../assets/1.png';
import e2 from '../assets/2.png';
import exams4 from '../assets/exams4.png';
import exams5_1 from '../assets/exams5-1.png';
import exams5_2 from '../assets/exams5-2.png';
import exams5_3 from '../assets/exams5-3.png';
import exams5_4 from '../assets/exams5-4.png';
import exams6 from '../assets/exams6.png';
import exams7 from '../assets/exams7.png';
import exams8 from '../assets/exams8.png';
import exams9 from '../assets/exams9.png';
import exams10_1 from '../assets/exams10-1.png';
import exams10_2 from '../assets/exams10-2.png';
import exams10_3 from '../assets/exams10-3.png';
import exams10_4 from '../assets/exams10-4.png';
import exams10_5 from '../assets/exams10-5.png';
import Footer from './Footer';
import VideoPlayer from 'react-video-js-player'
import vid from '../assets/Examsafrica web.mp4'


function Home(){
    const videoSrc =vid;
    const poster = 'https://archive.org/download/examsafrica-web/Examsafrica%20web.mp4'
    return(
        <div className='home-main'>
            <div className='home-grand-one'>
                <div className='home-parent-one'>
                    <div className='home-one-one'>
                        <div className='p-p'>
                            <div className='pra'> <h1>Practice</h1> <img src={e1} alt="" /> </div>
                            <div className='pre'> <img src={e2} alt="" /> <h1>Prepare</h1></div>
                        </div>
                        <div className='exel-head'>
                            <div className=''><h1>Excel</h1></div>
                            <div className='b-p'>
                                <div className='b1'><button style={{width: '80px' , height: '50px'}}>JAMB - UTME</button><button style={{width: '80px', height: '50px'}}>WAEC - SSCE</button><button style={{width: '80px' , height: '50px'}}>WAEC - GCE</button></div>
                                <div className='b2'><button style={{width: '180px' , height: '50px'}}>COMMON ENTRANCE EXAM</button><button style={{width: '80px', height: '50px'}}>NECO</button></div>
                            </div>
                        </div>
                        <div>
                            <p >Welcome to the Exams.Africa, Exams Africa is a platform designed specifically for Africans looking to practise for upcoming exams. Our platform offers a comprehensive collection of past exam questions from a wide range of subjects, allowing users to test their knowledge and improve their skills.</p>
                        </div>
                        <div className='home-one-bottom'>
                        <Link to='/register'><button style={{background: '#002099',color: '#ffffff', width: '150px', height:'45px', border: 'none',}}>Get Started </button> </Link>
                        <Link to='/login'><button style={{background: '#ffffff',color: '#002099', width: '150px', height: '45px',  border: '2px solid #002099'}}>Start Practising</button> </Link>
                        </div>
                    </div>
                    <div className='home-one-two'>
                    <img src={exams4}/>
                    </div>
                </div>
            </div>
            <div className='home-two'>
                <div className='home-two-sub'><img src={exams5_1}/><div className='jid'></div><img src={exams5_2}/><div className='jid'></div><img src={exams5_3}/><div className='jid'></div><img src={exams5_4}/></div>
            </div>
            <div className='lab'>
                <h3>Why ExaLab Is Best?</h3>
            </div>
            <div className='home-grand-three'>
                <div className='home-parent-three'>
                    <div className='three-one'>
                        <div><img src={exams6}/></div>
                        <div className='words'>
                            <h3>Choose Your Category</h3>
                            <p>Choose the exam category based on your subject.<br/> This helps you differentiate between subjects that<br/>are essential for studying a particular course and<br/> subjects.</p>
                            <div className='linee'></div>
                        </div>
                    </div>
                    <div className='three-two'>
                        <div className='words'>
                            <h3>Select Preferable Subject</h3>
                            <p>The aim of this to help you see things more clearly <br/>and get a good impression of the possible options,<br/> whether you have your heart set on a particular<br/> career path or not.</p>
                            <div className='linee'></div>
                        </div>
                        <div><img src={exams7}/></div>
                    </div>
                    <div className='three-three'>
                        <div><img src={exams8}/></div>
                        <div className='words'>
                            <h3>Attend Examination</h3>
                            <p>Through our activities and technology, we are able to<br/> provide reliable data across several African products.</p>
                            <div className='linee'></div>
                        </div>
                    </div>
                    <div className='three-four'>
                        <div className='words'>
                            <h3>Select Preferable Subject</h3>
                            <p>The aim of this to help you see things more clearly <br/>and get a good impression of the possible options,<br/> whether you have your heart set on a particular <br/>career path or not.</p>
                            <div className='linee'></div>
                        </div>
                        <div><img src={exams9}/></div>
                    </div>
                </div>
            </div>
            <div className='home-four'>
                <h1>Available on These platforms</h1>
                <div className='home-four-sub'><img src={exams10_1}/><div className='jd'></div><img src={exams10_2}/><div className='jd'></div><img src={exams10_3}/><div className='jd'></div><img src={exams10_4}/><div className='jd'></div><img src={exams10_5}/></div>
            </div>
            {/* <div>
                <div className='home-five'>
                    <h1>Most Popular Subjects</h1>
                    <p>All your past questions all in one place. This is your one stop hub for through and precise </p>  exams preparations. 
                </div>
            </div> */}
            <div  className='home-five'>
                <h1>Use the Exam.Africa </h1><h1>Platform the right way</h1>
                <p>Learn the essential ways to successfully maximize the Platform for a exam success.</p>
            </div>
            {/* <div className='video'>
                <VideoPlayer src={videoSrc} poster={poster} width='720' height='420'/>
            </div> */}
            <Footer/>
        </div>
    )
}
export default Home;