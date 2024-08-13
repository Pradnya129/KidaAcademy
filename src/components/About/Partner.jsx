import React from 'react'
import { Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Autoplay } from 'swiper/modules';
import './Partner.css'
function Partner() {
  return (
    <section className='partner padding-3 my-5'>
            <Row className=' py-3'>
            <h3 className=' text-purple text-center ff-bubblegum fw-bold fs-40 '>Our Partners Logo</h3>
            <p className='  fs-6 text-center mt-2 px-250' style={{color:'#707070'}}>
              Rapidiously expedite granular imperatives  before economically sound web services.
               Credibly actualize pandemic strategic themeplatform.</p>
            </Row>
            <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={5}
            spaceBetween={20}
            loop={true}
            scrollbar={{ draggable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              reverseDirection: false // Ensures clockwise direction
            }}
            breakpoints={{
              200:{slidesPerView:1 },
              320: { slidesPerView: 2 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
              1466: { slidesPerView: 5 }
            }}
            onSwiper={(swiper) => console.log(swiper)}
            >            
                <SwiperSlide className='myslide '>
                <img src="img/partner_01.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide className='myslide '>
                <img src="img/partner_02.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide className='myslide ' >
                <img src="img/partner_03.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide className='myslide ' >
                <img src="img/partner_04.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide className='myslide '>
                <img src="img/partner_05.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide className='myslide '>
                <img src="img/partner_01.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide className='myslide '>
                <img src="img/partner_02.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide className='myslide ' >
                <img src="img/partner_03.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide className='myslide ' >
                <img src="img/partner_04.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide className='myslide '>
                <img src="img/partner_05.jpg" alt="" />
              </SwiperSlide>
            
             
               </Swiper>
             
    </section>
  )
}

export default Partner
