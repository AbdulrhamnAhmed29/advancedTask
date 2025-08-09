import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Icons
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";

// Style
import './HeaderTop.css';

// Contexts
import { CartContext } from '../../contextapi/context';
import { FavoriteContext } from '../../favoriteContext/favoriteContext';

const HeaderTOP = () => {
    const { cart } = useContext(CartContext);
    const { favorites } = useContext(FavoriteContext);

    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    const handleCartClick = () => {
        navigate('/cart');
    };

    const handleFavoriteClick = () => {
        navigate('/favorite');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search.trim()) {
            navigate(`/search?query=${encodeURIComponent(search.trim())}`);
        }
    };

    return (
        <section className='bg-white border pt-2 pb-2 shadow-lg header-top'>
            <div className='container d-flex justify-content-between align-items-center'>
                <Link to="/" className='logo'>
                    <img src="/img/logo.png" alt="Logo" />
                </Link>

                <form className='me-5 form-search' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className='ps-2 p-1 input-search'
                        placeholder='search'
                        name='search'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type='submit' className='p-1 btn-search'>
                        <IoSearch />
                    </button>
                </form>

                <div className="header-icons d-flex align-items-center gap-3">
                    {/* Favorite Icon with badge */}
                    <div
                        className="position-relative icon"
                        style={{ cursor: 'pointer' }}
                        onClick={handleFavoriteClick}
                    >
                        <FaRegHeart  size={24} />
                        {favorites.length > 0 && (
                            <span className="icon-badge">
                                {favorites.length}
                            </span>
                        )}
                    </div>

                    {/* Cart Icon with badge */}
                    <div
                        className="position-relative icon"
                        style={{ cursor: 'pointer' }}
                        onClick={handleCartClick}
                    >
                        <TiShoppingCart size={24} />
                        {cart.length > 0 && (
                            <span className="icon-badge">
                                {cart.length}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderTOP;
