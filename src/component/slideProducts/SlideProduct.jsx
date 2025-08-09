// CSS
import './SlideProduct.css';

// Icons
import { LiaStarSolid } from "react-icons/lia";
import { FaCartPlus, FaShare, FaCheck } from "react-icons/fa";
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

// React & Context
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

// AOS Animation
import AOS from 'aos';
import 'aos/dist/aos.css';

// Contexts
import { CartContext } from '../contextapi/context';
import { FavoriteContext } from '../../component/favoriteContext/favoriteContext';

export default function SlideProduct({ data, title }) {
    const { cart, addToCart } = useContext(CartContext);
    const { favorites, toggleFavorite } = useContext(FavoriteContext);

    useEffect(() => {
        AOS.init({ duration: 2500 });
    }, []);

    return (
        <div className='slideProduct-container container' data-aos="fade-up">
            <div className='content-slide-product'>
                <h2><span className='title-category text-shw'>{title}</span></h2>
                <p className='text-shw'>Add Besting Product To Weekly Line Up</p>
            </div>

            <div className='p-2'>
                <Swiper
                    autoplay={{
                        delay: 5500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    slidesPerView={4}
                    spaceBetween={0}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        '@0.00': { slidesPerView: 1, spaceBetween: 10 },
                        '@0.75': { slidesPerView: 2, spaceBetween: 20 },
                        '@1.00': { slidesPerView: 3, spaceBetween: 40 },
                        '@1.50': { slidesPerView: 4, spaceBetween: 50 },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {data.map((product) => {
                        const inCart = cart.some(item => item.id === product.id);
                        const isFavorite = favorites.some(item => item.id === product.id);

                        return (
                            <SwiperSlide key={product.id}>
                                <div className={`card-product1 ${inCart ? 'inCart' : ''}`}>
                                    {inCart && (
                                        <span className='status'><FaCheck /> In Cart</span>
                                    )}
                                    <Link to={`/detailsproduct/${product.id}`} className='link-product'>
                                        <div className="image-card mb-4">
                                            <img src={product.images?.[0]} alt={product.title} />
                                        </div>
                                        <div className="content-card text-start">
                                            <div className='name-product'>
                                                <h6 className='text-shw'>{product.title}</h6>
                                            </div>
                                            <div className='rating mb-2'>
                                                <LiaStarSolid />
                                                <LiaStarSolid />
                                                <LiaStarSolid />
                                                <LiaStarSolid />
                                                <LiaStarSolid />
                                            </div>
                                            <div>
                                                <h6><span className='text-shw'>${product.price}</span></h6>
                                            </div>
                                        </div>
                                    </Link>

                                    <div className='icon-hidden'>
                                        <span onClick={() => addToCart(product)} className='btn-cart'>
                                            <FaCartPlus />
                                        </span>
                                        <span onClick={() => toggleFavorite(product)} className='btn-favorite'>
                                            {isFavorite ? <IoIosHeart color="red" /> : <IoIosHeartEmpty />}
                                        </span>
                                        <span><FaShare /></span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
}
