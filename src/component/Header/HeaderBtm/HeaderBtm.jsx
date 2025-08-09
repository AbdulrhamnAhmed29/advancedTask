import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
// bootstrap 
import NavDropdown from 'react-bootstrap/NavDropdown';
// css 
import './HeaderBtm.css'
// icons 
import { PiSignInBold } from "react-icons/pi";
import { IoHomeOutline, IoInformationCircleOutline, IoCallOutline } from "react-icons/io5";
import { FaFontAwesomeAlt } from "react-icons/fa";


// axios for API calls
import axios from 'axios';

const HeaderBtm = (prop) => {

    const [isopen, setisopen] = useState(false);
    const toggleCategoryMenu = () => {
        setisopen(!isopen);
    }

    const location = useLocation();
    console.log(location.pathname);

    // هنا ضفت خاصية icon لكل صفحة
    const pages = [
        { name: 'Home', slug: '/', icon: <IoHomeOutline /> },
        { name: 'About', slug: '/about', icon: <FaFontAwesomeAlt  /> },
        { name: 'Contact', slug: '/contact', icon: <IoCallOutline /> },
    ]

    const [product, setProduct] = useState([]);

    useEffect(() => {
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
        <div className="header-btm">
            <nav className='container parent-nav'>
                {/* category-nav */}
                <div className='category-nav'>
                    {/* category-btn */}
                    <div className="category-btn fs-5 pt-3" >
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            <div className="dropdown-scroll">
                                {product.map((item, index) => (
                                    <NavDropdown.Item key={index} href={`/category/${item.slug}`} className='pt-2 pb-2 border-bottom'>
                                        {item}
                                    </NavDropdown.Item>
                                ))}
                            </div>
                        </NavDropdown>
                    </div>
                </div>

                {/* nav-pages */}
             <div className="nav-pages me-4">
  {pages.map((page, index) => (
    <Link
      to={page.slug}
      key={index}
      className={location.pathname === page.slug ? "active nav-link" : "nav-link"}
    >
      {page.icon}
      <span className="page-name">{page.name}</span>
    </Link>
  ))}
</div>


                {/* icons-signin-user */}
                <div className="icons-signin-user">
                    <div className='signin-icon' onClick={toregister}>
                        <PiSignInBold />
                    </div>
                </div>
            </nav >
        </div >
    )
}

export default HeaderBtm
