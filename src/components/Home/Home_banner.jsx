import React, { useEffect } from 'react';
import BannerInfo from '../../json_api/Banner.json'
import  Carousel  from 'react-bootstrap/Carousel';
import './Banner.css'
import { Link } from 'react-router-dom';
import AOS from 'aos';

function Home_banner() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration for smoother animation
  }, []);

  const handleSlideChange = () => {
    console.log("refresh")
    AOS.refresh(); // Refresh AOS after the slide has fully transitioned
  };
  

    return (
    <>
     <Carousel className='section-notch banner' onSlid={handleSlideChange} >
     {
        BannerInfo.map((item)=>{
          return(
               
         <Carousel.Item interval={3000} key={item.id}  >
                <img className="d-block w-100 banner-img " src={item.img_src} loading="lazy" alt="First slide" style={{filter:"brightness(70%)"}}/>
              <Carousel.Caption  className=" top-25 left-0 ms-md-5 ms-0 me-0 text-md-start banner-content  ">
                <h2 className='heading1 ff-bubblegum fw-bold fs-22' data-aos={item.fadeLeft}  >{item.heading1}</h2>
                <h1 className='heading2 ff-bubblegum fw-bold fs-32' data-aos={item.fadeUp} >{item.heading2}</h1>
                <p data-aos={item.fadeDown}  className='fs-6 ff-roboto'>{item.pText}</p>
                <div data-aos={item.fadeDown}  className='ms-0 text-center text-md-start'>
                <Link to="#" className='btn bg-purple button-default text-white fw-bold' onClick={(e)=>{e.preventDefault()}}> Read me</Link>
                <Link to="#" className='btn bg-warning button-default text-white fw-bold ms-4' onClick={(e)=>{e.preventDefault()}}>Buy Now</Link>
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


             

    
    

