import React, { useEffect } from 'react';
import BannerInfo from '../../json_api/Banner.json'
import  Carousel  from 'react-bootstrap/Carousel';
import './Banner.css'
import { Link } from 'react-router-dom';
import AOS from 'aos';

function Home_banner() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleSlideChange = () => {
    AOS.refresh();
  };
    return (
    <>
     <Carousel className='section-notch banner' onSlide={handleSlideChange}  >
     {
        BannerInfo.map((item)=>{
          return(
               
         <Carousel.Item interval={2000} key={item.id}  >
                <img className="d-block w-100 banner-img    " src={item.img_src} alt="First slide" style={{filter:"brightness(70%)"}}/>
              <Carousel.Caption  className=" top-25 left-0 ms-md-5 ms-0 me-0 text-md-start banner-content  ">
                <h2 className='heading1 ff-bubblegum fw-bold fs-22' data-aos={item.fadeLeft}  >{item.heading1}</h2>
                <h1 className='heading2 ff-bubblegum fw-bold fs-32' data-aos={item.fadeUp} >{item.heading2}</h1>
                <p data-aos={item.fadeDown}  className='fs-6 ff-roboto'>{item.pText}</p>
                <div data-aos={item.fadeDown}  className='ms-0 text-center text-md-start'>
                <Link to={"/read_me"}className='btn bg-purple button-default text-white fw-bold'>Read me</Link>
                <Link to={"/buy_now"}className='btn bg-warning button-default text-white fw-bold ms-4'>Buy Now</Link>
                </div>
              </Carousel.Caption>
           </Carousel.Item>

            )
            })

            }
    </Carousel>

    </>
  )
}

export default Home_banner


             

    
    

