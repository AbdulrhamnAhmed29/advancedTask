import React,{useEffect } from 'react'
import { FaUsers, FaShoppingCart, FaStar } from "react-icons/fa";
import "./StoreStats.css";
// Aos.js animation 
import AOS from 'aos';
import 'aos/dist/aos.css';

function StoreStats() {

        // animation 
    useEffect(() => {
        AOS.init({ duration: 2500 });
    }, []);
    const stats = [
        { icon: <FaUsers />, number: "1.2M", label: "Monthly Visitors" },
        { icon: <FaShoppingCart />, number: "250K", label: "Orders Completed" },
        { icon: <FaStar />, number: "98%", label: "Customer Satisfaction" }
    ];
    return (
        <section className="store-stats container py-5">
            <h2 className="text-center mb-5"   data-aos="fade-up"><span>Our Store in Numbers</span></h2>
            <div className="row text-center"   data-aos="fade-up" >
                {stats.map((stat, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="stat-card p-4 shadow rounded">
                            <div className="stat-icon text-primary mb-3">{stat.icon}</div>
                            <h3 className="stat-number">{stat.number}</h3>
                            <p className="stat-label">{stat.label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    )
}

export default StoreStats
