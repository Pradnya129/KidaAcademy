import React from 'react'
import { Col, Container ,Row  } from 'react-bootstrap'
import './Teacher.css'
import { Link } from 'react-router-dom'
import TeacherInfo from '../../json_api/Teacher.json'

function Teacher({teacherClass}) {
  const visibleTeachers = TeacherInfo.slice(0, teacherClass.totalTeacher);
  return (
    <section className={`${teacherClass.bgClass} py-4 my-5 section-notch teacher  `}>
      <Container>
       <Row>
       <h3 className={` ${teacherClass.headingColor} text-center ff-bubblegum fw-bold fs-40  `}>Meet Our Teachers</h3>
       <p className={` ${teacherClass.textColor}  fs-6 text-center mt-2  px-250`}>Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform.</p>
       </Row>
       <Row className='mb-5 mt-3  '>
          {
           visibleTeachers.map((item,index)=>{
            return(
              <Col lg={6}    className=' mb-4 px-5 px-sm-4' key={item.id}>
              <Row  className=' '>
                <div className="teacher-img col-sm-4 p-0 pe-xl-0 ">
                 <img src={item.img} alt="teacher" className=' w-100 h-100  '  />
                </div>
                <div className={`teacher-content ${item.bgColor}  col-sm-8 p-3  `}>
                  <h3 className='ff-bubblegum text-white'>{item.teacherName} <span className='fs-6 ff-bubblegum '>{item.teacherSubject}</span></h3>
                <div className="social-media">
                  <Link to="#" className='text-decoration-none ' onClick={(e)=>{e.preventDefault()}}> <i className='fa fa-facebook mx-1 text-white  ' > </i> </Link>
                  <Link to="#" className='text-decoration-none 'onClick={(e)=>{e.preventDefault()}}> <i className='fa fa-vimeo mx-1  text-white    '> </i> </Link>
                  <Link to="#" className='text-decoration-none 'onClick={(e)=>{e.preventDefault()}}> <i className='fa fa-twitter mx-1  text-white  '> </i> </Link>
                  <Link to="#" className='text-decoration-none 'onClick={(e)=>{e.preventDefault()}}> <i className='fa fa-vimeo mx-1  text-white    '> </i> </Link>
                  <Link to="#" className='text-decoration-none 'onClick={(e)=>{e.preventDefault()}}> <i className='fa fa-pinterest mx-1  text-white '> </i> </Link>
                  <Link to="#" className='text-decoration-none 'onClick={(e)=>{e.preventDefault()}}> <i className='fa fa-rss mx-1  text-white       '> </i> </Link>
                </div>
                <p className='text-white fs-6 mt-3 '>{item.description}</p>
                  <Link to ="#" className='text-white fw-bold text-decoration-none view  ' onClick={(e)=>{e.preventDefault()}}>View Portfolio </Link>
                </div>
              </Row>
            </Col>
            )
           }) 
          }
    
        
  
        
       </Row>
      </Container>
    </section>
  )
}

export default Teacher
