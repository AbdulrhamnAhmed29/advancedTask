import React, { useEffect, useState } from 'react';
import './categoryPage.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SlideProduct from '../../component/slideProducts/SlideProduct';

// Aos.js animation 
import AOS from 'aos';
import 'aos/dist/aos.css';

function CategoryPage() {
    const { category } = useParams();

    const [productCategory, setProductCategory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCategoryProducts = async () => {
            try {
                setLoading(true); //
                const response = await axios.get(`https://dummyjson.com/products/category/${category}`);
                setProductCategory(response.data.products);
            } catch (error) {
                console.error('خطأ في جلب بيانات التصنيف:', error);
            } finally {
                setLoading(false);
            }
        };


        getCategoryProducts();
    }, [category]);

    // animation 
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);


    return (
        <div className='CategoryPage container' data-aos="fade-up">
            {
                loading ? (
                    <div className="text-center py-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading ..</span>
                        </div>
                        <p className="mt-3">Loading ...</p>
                    </div>
                ) : (
                    <div className="product">
                        <SlideProduct data={productCategory} title={category} />
                    </div>
                )
            }
        </div>
    );
}

export default CategoryPage;
