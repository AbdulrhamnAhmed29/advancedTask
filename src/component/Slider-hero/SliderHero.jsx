// React & Hooks
import React, { useRef, useEffect } from 'react';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// AOS Animation
import AOS from 'aos';
import 'aos/dist/aos.css';

// CSS
import './SliderHero.css';

const SliderHero = () => {

  // animation
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // hero slider content
  const heroPanner = [
    {
      image: "/img/banner_Hero1.jpg",
      desc: "INTRODUCING THE NEW",
      title: "Microsoft Xbox 360 Controller"
    },
    {
      image: "/img/banner_Hero2.jpg",
      desc: "MINI-X6U SPEAKER",
      title: "Led Bluetooth Speaker Lamp"
    },
    {
      image: "/img/banner_Hero3.jpg",
      desc: "NEW ARRIVAL",
      title: "Xiaomi Air 75 Earbuds"
    },
  ];

  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className='text-black text-center oarent-slider container' data-aos="fade-up">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >

        {
          heroPanner.map((panner, index) => (
            <SwiperSlide key={index}>
              <div className='parent-img-slider'>
                <img src={panner.image} alt={panner.title} />
                <div className='parent-contetnt-slider'>
                  <p className='fst-italic'>{panner.desc}</p>
                  <h1 className='fw-5'>
                    <span className='pe-5'>{panner.title}</span>
                    <p className=' paragrah'>
                      Lorem ipsum docons adipisicing orem ipsum Lorem ipsum docons adipisicing orem ipsum Lorem ipsum docons adipisicing orem ipsum Lorem ipsum docons adipisicing orem ipsum docons adipisicing um docons adipisicing orem ipsum docons adipisicing  cons adipisicing orem ipsum docons adipisicing elit. Eveniet, atque!
                    </p>

                  </h1>
                  <button className='btn-slider'>Shop Now</button>
                </div>
              </div>
            </SwiperSlide>
          ))
        }

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>

      </Swiper>
    </div>
  );
}

export default SliderHero;
