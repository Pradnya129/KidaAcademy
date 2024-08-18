import React from 'react'
import Banner from './Home_banner';
import './Banner.css'
import Feature from './Feature';
import About from './About';
import Popularclasses from './Popularclasses';
import Teacher from './Teacher';
import Testimonial from './Testimonial';
import Newsletter from './Newsletter';


function Home() {
  return (
    <>
     <Banner/>
     <Feature/>
     <About  myclass={{bgClass: "about", headingColor:"text-white", textColor:"text-white"}}/>
     <Popularclasses classNo={6}/>
     <Teacher teacherClass={ {totalTeacher : 4 ,  bgClass:'teacher1' ,textColor:'text-white', headingColor:'text-purple'}}/>
     <Testimonial/>
     <Newsletter/>
    </>
  )
}

export default Home
