import React, { useEffect, useContext } from 'react';
import './Cart.css';
import { CartContext } from '../../component/contextapi/context';
import { RiDeleteBin5Line } from "react-icons/ri";

// Aos.js animation 
import AOS from 'aos';
import 'aos/dist/aos.css';

function Cart() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const { cart, increase, decrease, removeFromCart } = useContext(CartContext);

    const total = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

    // animation 
    useEffect(() => {
        AOS.init({ duration: 2500 });
    }, []);


    return (
        <section className='cart-section container' data-aos="fade-up">
            <div className='cart-content '>
                <h2>Order summary</h2>

                <div className="items ">
                    {cart.length === 0 ? (
                        <h3 className='text-center'>Your cart is empty</h3>
                    ) : (
                        cart.map((item) => (
                            <div key={item.id} className="cart-item ">
                                <div className='text-center row cart-sell'>
                                    <div className="image-name col">
                                        <img src={item.images[0]} alt={item.title} />
                                    </div>
                                    <div className="name-price col">
                                        <h4>{item.title}</h4>
                                        <p className='price'>${item.price}</p>

                                        <div className="quantity">
                                            <button onClick={() => decrease(item.id)}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => increase(item.id)}>+</button>
                                        </div>

                                        <div className="remove-item mt-1">
                                            <button
                                                className='bg-transparent fs-5 rabbish'
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                <RiDeleteBin5Line />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className='footer-cart'>
                    <div className="button-summary">
                        <div className="shop-table">
                            <div className="total">
                                <h4>Total:</h4>
                                <p>${total.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>

                    <div className="button">
                        <button>Place Order</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cart;
