import React from 'react'
import Breadcrums from '../Breadcrums';
import Feature from '../Home/Feature';
import About from '../Home/About';
import Teacher from '../Home/Teacher';
import Testimonial from '../Home/Testimonial';
import Whychoose from './Whychoose';
import Partner from './Partner';
import Newsletter from '../Home/Newsletter';
import Achievment from './Achievment';
import TeacherInfo from '../../json_api/Teacher.json'


function AboutPage() {
  return (
      <>
    <Breadcrums data={{ headingName: "About Our KidsAcademy", linkName: "About us" }} />
    <About  myclass={{bgClass: "about1", headingColor:"text-purple", textColor:"text-grey"}}/>
    <Achievment/>
    <Testimonial/>
    <Teacher   teacherClass={ {totalTeacher : 4 ,  bgClass:'teacher1' ,textColor:'text-grey', headingColor:'text-purple'}}/>
    <Whychoose/>
    <Partner/>
    <Newsletter/>

    </>
  )
}

export default AboutPage
