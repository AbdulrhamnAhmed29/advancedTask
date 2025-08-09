import React,{ useEffect} from "react";
import { FaTrophy, FaGlobe, FaAward } from "react-icons/fa";
import "./BrandAchievements.css";
// Aos.js animation 
import AOS from 'aos';
import 'aos/dist/aos.css';

const BrandAchievements = () => {
    // animation 
    useEffect(() => {
        AOS.init({ duration: 2500 });
    }, []);
    const achievements = [
        {
            icon: <FaTrophy />,
            title: "Best Local Brand Award",
            description: "Recognized as the leading local brand in 2023 for quality and innovation."
        },
        {
            icon: <FaGlobe />,
            title: "Global Market Expansion",
            description: "Successfully launched our products in over 15 countries worldwide."
        },
        {
            icon: <FaAward />,
            title: "Customer Excellence Recognition",
            description: "Awarded for achieving a 98% customer satisfaction rate globally."
        }
    ];

    return (
        <section className="brand-achievements container py-5">
            <h2 className="text-center mb-5" data-aos="fade-up">Our Achievements</h2>
            <div className="row" >
                {achievements.map((item, index) => (
                    <div key={index} className="col-md-4 text-center mb-4" data-aos="fade-up">
                        <div className="achievement-card p-4 shadow rounded">
                            <div className="achievement-icon text-warning mb-3">
                                {item.icon}
                            </div>
                            <h4 className="achievement-title">{item.title}</h4>
                            <p className="achievement-description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BrandAchievements;
