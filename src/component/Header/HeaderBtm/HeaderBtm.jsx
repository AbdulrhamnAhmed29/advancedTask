import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
// bootstrap 

import NavDropdown from 'react-bootstrap/NavDropdown';
// css 
import './HeaderBtm.css'
// icons 
import { PiSignInBold } from "react-icons/pi";

// axios for API calls
import axios from 'axios';

import { useNavigate } from "react-router-dom";






// HeaderBtm component
const HeaderBtm = (prop) => {

    const [isopen, setisopen] = useState(false);
    // Function to toggle the category menu
    const toggleCategoryMenu = () => {
        // Toggling the state of isopen
        setisopen(!isopen);
    }


    // Using useLocation to get the current location
    const location = useLocation();
    console.log(location.pathname);
    // Static pages for navigation
    const pages = [
        { name: 'Home', slug: '/' },
        { name: 'About', slug: '/about' },
        { name: 'Contact', slug: '/contact' },
    ]
    // Fetching categories from the API

    // Using useState to manage the product state
    const [product, setProduct] = useState([]);

    // useEffect to fetch categories on component mount
    useEffect(() => {
        // Using axios to make the API call
        axios.get('https://dummyjson.com/products/categories')
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                console.error("Error fetching products:", err);
            })
    }, [])

    const navigate = useNavigate();

    const toregister = () => {
        navigate("/register")
    }



    return (

        <div className="header-btm  ">
            <nav className='container parent-nav  '>
                {/* category-nav  */}
                <div className='category-nav '>
                    {/* category-btn  */}
                    <div className="category-btn fs-5 pt-3" >
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            <div className="dropdown-scroll  ">
                                {product.map((item, index) => (
                                    <NavDropdown.Item key={index} href={`/category/${item.slug}`} className='pt-2 pb-2 border-bottom'>
                                        {item.name}
                                    </NavDropdown.Item>
                                ))}
                            </div>
                        </NavDropdown>




                    </div>
                    {/* category-links  */}

                </div>
                {/* nav-pages   */}
                <div className="nav-pages me-4">
                    {pages.map((page, index) => (
                        <Link to={page.slug} key={index} className={location.pathname === `${page.slug}` ? "active" : ""}>
                            {page.name}
                        </Link>

                    ))}
                </div>
                {/* icons-signin-user  */}
                <div className="icons-signin-user ">
                    <div className='signin-icon ' onClick={toregister}>
                        <PiSignInBold />
                    </div>
                   


                </div>
            </nav >
        </div >

    )
}
export default HeaderBtm
