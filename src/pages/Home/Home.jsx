import React, { useEffect, useState } from 'react'
import './Home.css';
import SliderHero from '../../component/Slider-hero/SliderHero';
import SlideProduct from '../../component/slideProducts/SlideProduct';
import axios from 'axios';

const Home = () => {

  const [product, setproduct] = useState({});
  const [loading, setloading] = useState(true);

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  // category product 
  const categories = [
    "smartphones",
    "mobile-accessories",
    "laptops",
    "tablets",
    "sunglasses",
    "sports-accessories",
  ]

  // Get to data by category 
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category, index) => {
            const res = await axios.get(`https://dummyjson.com/products/category/${category}`);
            return { [category]: res.data.products }


          })
        );


        const productData = Object.assign({}, ...results);
        setproduct(productData);

      } catch (err) { console.log(err) }
      finally {
        setloading(false)
      }
    }



    fetchProduct();
  }, []);




  return (
    <div className='page-home'>
      {/* slider-hero-section  */}
      <SliderHero />

      {/* Slider-product  */}


      {loading ? (
        <div className=' d-flex justify-content-center ' style={{ height: "100vh" }}>
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading ..</span>
            </div>
            <p className="mt-3">Loading ...</p>
          </div>
        </div>
      ) : categories.map((category, index) => (
        <SlideProduct key={index} title={category.replace("-", " ")} data={product[category]}
        />


      ))}

    </div>
  )
}

export default Home
