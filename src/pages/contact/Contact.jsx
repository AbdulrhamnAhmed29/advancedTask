import React, { useState ,useEffect } from "react";
import {  FaMapMarkerAlt, FaPhoneAlt, FaCheckCircle } from "react-icons/fa";
import "./Contact.css";
// Aos.js animation 
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactUs = () => {
        // animation 
    useEffect(() => {
        AOS.init({ duration: 2500 });
    }, []);


    
    
    
        useEffect(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, []);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [focusedField, setFocusedField] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
    };



        return (
            <section className="contact-us container" data-aos="fade-up">
                <h2 className="text-center mb-5"><span>Contact Us</span></h2>
                <div className="row">
                    {/* Form Section */}
                    <div className="col-md-6 mb-4">
                        <h4>Send us a message</h4>
                        {submitted && (
                            <div className="alert alert-success d-flex align-items-center">
                                <FaCheckCircle className="me-2" /> Your message has been sent successfully!
                            </div>
                        )}
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onFocus={() => setFocusedField("name")}
                                onBlur={() => setFocusedField("")}
                                onChange={handleChange}
                                className={`form-control mb-3 ${focusedField === "name" ? "highlight" : ""}`}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onFocus={() => setFocusedField("email")}
                                onBlur={() => setFocusedField("")}
                                onChange={handleChange}
                                className={`form-control mb-3 ${focusedField === "email" ? "highlight" : ""}`}
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onFocus={() => setFocusedField("message")}
                                onBlur={() => setFocusedField("")}
                                onChange={handleChange}
                                className={`form-control mb-3 ${focusedField === "message" ? "highlight" : ""}`}
                                rows="5"
                                required
                            ></textarea>
                            <button type="submit" className="btn btn-primary w-100">Send</button>
                        </form>
                    </div>

                    {/* Contact Info Section */}
                    <div className="col-md-6 mt-5">
                        <h4><span>Get in touch</span></h4>
                        <p><FaPhoneAlt className="me-2" />01128787885</p>
                        <p><FaMapMarkerAlt className="me-2" /> Giza</p>



                        <h5 className="mt-4"><span>Business Hours</span></h5>
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>


                    </div>
                    <div className="mt-4">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.859517342916!2d-74.00601508459491!3d40.71277597933006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjIuMCJX!5e0!3m2!1sen!2sus!4v1635461234567"
                            width="100%"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Map"
                        ></iframe>
                    </div>
                </div>
            </section>
        );
    };

    export default ContactUs;
