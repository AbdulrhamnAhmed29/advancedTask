import React, { useEffect } from "react";
import "./BrandClosing.css";
// Aos.js animation 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router";

const BrandClosing = () => {
    // animation 
    useEffect(() => {
        AOS.init({ duration: 2500 });
    }, []);
    return (
        <section className="brand-closing text-center py-5">
            <div className="container" data-aos="fade-up">
                <h2 className="mb-3"><span>Thank You for Being Part of Our Journey</span></h2>
                <p className="closing-text mb-4">
                    We truly appreciate your trust and support. Our mission is to keep delivering
                    the highest quality products and exceptional customer experiences.
                    Let’s continue this journey together towards more success and innovation.
                </p>
                <Link to="/contact" className="btn btn-primary" data-aos="fade-up">

                    Get in Touch
                </Link>
            </div>
        </section>
    );
};

export default BrandClosing;
