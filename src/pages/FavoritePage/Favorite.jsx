import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './favorite.css';
import { CartContext } from '../../component/contextapi/context';

// Aos.js animation 
import AOS from 'aos';
import 'aos/dist/aos.css';

const FavoritePage = () => {
    const [favorites, setFavorites] = useState(() => {
        const stored = localStorage.getItem("favorites");
        return stored ? JSON.parse(stored) : [];
    });

    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    // animation 
    useEffect(() => {
        AOS.init({ duration: 2500 });
    }, []);

    const toggleFavorite = (product) => {
        const exists = favorites.find(item => item.id === product.id);
        if (exists) {
            setFavorites(favorites.filter(item => item.id !== product.id));
        } else {
            setFavorites([...favorites, product]);
        }


    };

    return (
        <div className="container fav-product" data-aos="fade-up" >
            <div className='mb-5'>
                <h2 className=' fav-name'>Favorites Products</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            {favorites.length === 0 ? (
                <p>Not Found...</p>
            ) : (
                <div className="row">
                    {favorites.map(product => (
                        <div key={product.id} className="col-md-4 lg-6 mb-3">
                            <div className="card h-100 text-center ">
                                <Link to={`/detailsproduct/${product.id}`}>
                                    <img src={product.images?.[0]} className="card-img-top pt-4 w-50 " alt={product.title} />
                                </Link>
                                <div className="card-body row">

                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">${product.price}</p>

                                    <div className='col'>
                                        <button onClick={() => toggleFavorite(product)} className='  btn btn-primary mt-2 w-100' >
                                            Delete
                                        </button>
                                        <button onClick={() => addToCart(product)} className='btn btn-primary mt-2 w-100'>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FavoritePage;
