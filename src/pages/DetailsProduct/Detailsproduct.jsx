import './Detailsproduct.css'
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
// axios 
import axios from 'axios'
// Component 
// icons 
// rating-icons 
import { LiaStarSolid } from "react-icons/lia";
// cart icon
import { LiaCartPlusSolid } from "react-icons/lia";
// swiper 
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Detailsproduct.css'
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

// context 
import { CartContext } from '../../component/contextapi/context';

// Aos.js animation 
import AOS from 'aos';
import 'aos/dist/aos.css';





function Detailsproduct() {

    // Scroll to top when the component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const toTop = () => {
        window.scrollTo(0, 0);
    }

    // animation 
    useEffect(() => {
        AOS.init({ duration: 2500 });
    }, []);



    // State to hold product details and loading state
    const [product, setProduct] = useState(null);

    const [productloading, setProductLoading] = useState(true);

    const [productRelated, setProductRelated] = useState([]);

    const [loading, setLoading] = useState(true);
    // Get the id from the URL parameters
    const { id } = useParams();


    const { addToCart } = useContext(CartContext);


    // Fetch product details when the component mounts or id changes
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const res = await axios.get(`https://dummyjson.com/products/${id}`).then(res => {
                    console.log(res.data);
                    const data = res.data;
                    setProduct(data);
                    setLoading(false);


                });


            }
            catch (err) {
                console.error("Error fetching product details:", err);
            }
        }
        fetchdata();
    }, [id]);


    // Fetch related products based on the product's category
    useEffect(() => {
        if (product && product.category) {
            const fetchRealatedProducts = async () => {
                try {
                    const res = await axios.get(`https://dummyjson.com/products/category/${product.category}`);
                    setProductRelated(res.data.products);

                } catch (error) {
                    console.log(error);
                }
            };
            fetchRealatedProducts();
        }
    }, [product]);





    return (
        <div className='container'>



            {loading ? (
                <div className=' loading-details-product '>
                    <div className="text-center py-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading ..</span>
                        </div>
                        <p className="mt-3">Loading ...</p>
                    </div> 
                </div>
            ) : (
                <div className='details-product container more gap-5'>

                    {/* image-product  */}
                    <div className="row justify-content-center align-items-center" >
                        <div className='product-images d-flex justify-content-center align-items-center col-md-6 col-sm-12 col-lg-6 pb-5 pt-4' data-aos="fade-left">
                            <div className='big-img col-md-6 col-sm-12 col-lg-6 d-flex justify-content-center align-items-center'>
                                <img src={product.images?.[0]} alt={product.title} id='img-lg' />
                            </div>
                            <div className='parent-small-images col-md-12 col-sm-12 col-lg-12 d-flex justify-content-center align-items-center flex-wrap mt-4'>
                                {product.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        className='small-image m-2'
                                        onClick={() => document.getElementById("img-lg").src = image}
                                    />
                                ))}
                            </div>
                        </div>



                        <div className='product-details col-md-6 col-sm-12 col-lg-6' data-aos="fade-right">
                            <h1 className='title-details-product'>{product.title}</h1>
                            <p className='decs-product'>{product.description}</p>
                            <p className='decs-product'> Category : <span>{product.category.replace("-", " ")}</span></p>
                            <p className='decs-product'>Brand : <span>{product.brand}</span></p>
                            <div className='rating mb-2'>
                                {[...Array(5)].map((_, i) => <LiaStarSolid key={i} />)}
                            </div>
                            <h2><span>${product.price}</span></h2>


                            <button className='add-to-cart' onClick={() => addToCart(product)}>Add to Cart <LiaCartPlusSolid /></button>


                        </div>


                    </div>

                    {/* content-product  */}

                    <div className='slider-details container content-slide-product mt-5 pt-5' data-aos="fade-up">
                        <h2 className='text-start title-category text-shw'><span>Related Products</span></h2>
                        <p className='text-shw'>Add Besting Product To Weekly Line Up</p>
                    </div>
                </div>
            )}




            <div className='mt-5 pt-5' data-aos="fade-up">
                {/* slider-related-product */}
                {!productloading ? (
                    <h2 className='d-flex justify-content-center'>Loading related products...</h2>
                ) : (
                    <Swiper
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        slidesPerView={4}
                        spaceBetween={0}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            '@0.00': {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            '@0.75': {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            '@1.00': {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            '@1.50': {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        {productRelated.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className='card-product1 ' onClick={toTop}>
                                    <Link to={`/detailsproduct/${item.id}`} className='link-product'>
                                        <div className="image-card mb-4">
                                            <img src={item.images?.[0] || ''} alt={item.title} />
                                        </div>
                                        <div className="content-card text-start">
                                            <div className='name-product'>
                                                <h6 className='text-shw'>{item.title}</h6>
                                            </div>
                                            <div className='rating mb-2'>
                                                {[...Array(5)].map((_, i) => <LiaStarSolid key={i} />)}
                                            </div>
                                            <div className='price-product'>
                                                <span className='text-shw'>${item.price}</span>
                                            </div>


                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}

            </div>
        </div>
    );
}
export default Detailsproduct;
