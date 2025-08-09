import React, { useEffect } from 'react';
import './hero.css'
// Aos.js animation 
import AOS from 'aos';
import 'aos/dist/aos.css';


function Heroabout() {
    // animation 
    useEffect(() => {
        AOS.init({ duration: 2500 });
    }, []);
    return (
        <div className='about-hero' >
            <div className='about-hero-content text-center' data-aos="fade-up">
                <div className="content-hero">
                    <h3 className='title-header'>
                        Reda <span className=' p-2 rounded-5'>Store</span>
                    </h3>
                    <p className='text-white'>Welcome to our store – where quality meets style.</p>
                </div>
            </div>
        </div>
    )
}

export default Heroabout
