import React,{ useEffect} from 'react'
// Aos.js animation 
import AOS from 'aos';
import 'aos/dist/aos.css';

function BrandIntro() {
    // animation 
    useEffect(() => {
        AOS.init({ duration: 2500 });
    }, []);

    return (
        <div  >
            <section className="brand-intro container py-5">
                <h2 className="mb-5 text-center" data-aos="fade-up"><span>About Our Brand</span></h2>
                <div className="row align-items-center text-center">
                    <div className="col-md-6 mb-4 mb-md-0 " data-aos="fade-up">
                        <img
                            src="/img/seac2.png"
                            alt="Brand History"
                            className="img-fluid rounded shadow"
                        />
                        
                    </div>
                    
                    <div className="col-md-6 text-start" >
                        <p className="lead" data-aos="fade-up">
                            Our brand was founded in <span>2015</span> with a mission to deliver a unique online shopping experience that meets the needs of customers across the Arab world. We started as a small, passionate team focused on technology and quality, and over time, we've grown into one of the leading e-commerce platforms in the region.
                        </p>
                        <p data-aos="fade-up">
                            We believe that customer trust is built through quality, transparency, and commitment. That’s why we’re always striving to offer genuine products, professional customer service, and a seamless user experience.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BrandIntro
