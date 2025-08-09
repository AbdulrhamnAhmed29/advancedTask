import React, { useEffect } from 'react'
import { FaCheckCircle } from "react-icons/fa";
import './BrandAdvantages.css'
// Aos.js animation 
import AOS from 'aos';
import 'aos/dist/aos.css';

function BrandAdvantages() {
    // animation 
    useEffect(() => {
        AOS.init({ duration: 2500 });
    }, []);

    const advantages = [
        "High-quality products sourced from trusted suppliers.",
        "Competitive prices with great value for money.",
        "Fast and reliable delivery services.",
        "Secure and easy online payment options.",
        "Exceptional customer support available 24/7.",
        "A wide range of categories to meet every need."
    ];
    return (
        <section className="brand-advantages container py-5">
            <h2 className="mb-5 text-center" data-aos="fade-up">
                <span>Why Choose Us?</span>
            </h2>
            <div className="row align-items-center">

                {/* النص والمزايا */}
                <div className="col-md-6" data-aos="fade-up">
                    <ul className="list-unstyled">
                        {advantages.map((adv, index) => (
                            <li key={index} className="mb-3 d-flex align-items-start">
                                <FaCheckCircle className="me-2 text-success" />
                                <p>{adv}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="col-md-5 text-center" data-aos="fade-up">
                    <img
                        src="/img/advanget.jpg"
                        alt="Why Choose Us"
                        className="img-fluid rounded shadow"
                    />
                </div>
            </div>
        </section>

    )
}

export default BrandAdvantages
