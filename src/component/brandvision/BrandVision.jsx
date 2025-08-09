import React, { useEffect } from 'react'
import './BrandVision.css'

// Aos.js animation 
import AOS from 'aos';
import 'aos/dist/aos.css';

function BrandVision() {
    // animation 
    useEffect(() => {
        AOS.init({ duration: 2500 });
    }, []);

    return (
        <div>
            <section className="brand-vision container py-5">
                <h2 className="mb-5 text-center" data-aos="fade-up" ><span>Our Vision & Identity</span> </h2>
                <div className="row align-items-center">
                    <div className="col-md-6 order-md-2 mb-4 mb-md-0 " data-aos="fade-up">
                        <img
                            src="/img/heroooo.png"
                            alt="Brand Vision"
                            className="img-fluid rounded shadow"
                        />
                    </div>
                    <div className="col-md-6 order-md-1" >
                        <p className="lead" data-aos="fade-up">
                            Our vision is to become the go-to destination for online shopping in the Middle East — offering a seamless, secure, and enjoyable experience for every customer.
                        </p>
                        <p data-aos="fade-up">
                            We are committed to building a brand identity that reflects trust, innovation, and authenticity. Our visual language, product selections, and customer interactions are all designed to create a consistent and memorable brand experience.
                        </p>
                        <p data-aos="fade-up">
                            As we grow, we remain focused on community, creativity, and delivering value through everything we offer.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default BrandVision
