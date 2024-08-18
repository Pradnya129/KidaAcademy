import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import './About.css';
import { Link } from 'react-router-dom'
function About({myclass}) {
  return (
    <section className={`section-notch ${myclass.bgClass} py-5 my-5 `}>
      <Container className='py-2'>
        
        <Row className='text-center'>
        <Col lg={6} md={12} sm={12} className='mb-3 px-0'>
        <img src={"/img/about.png"} alt="about" className=' img-fluid ' loading="lazy" />
        </Col>
        <Col className='text-xl-start text-lg-start text-center  ' lg={6} md={12} sm={12}>
         <h3 className={`${myclass.headingColor} ff-bubblegum fw-bold fs-1 mb-3 `}>About Our KidsAcademy</h3>
         <p className={` ${myclass.textColor} pe-lg-3 text-xl-justify text-lg-start text-center`}>Enthusiasticay diseminate competitive oportunitie through transparent an actions Compelngly seize viral schemas through intermandated creative is adiea sources. Enthusiasticay plagiarize clientcentered relationship for the covalent experiences. Distinctively architect 24/365 service for wireless is ebusiness ahosfluorescently Efficiently comunicate coperative methods of empowerment awesome athrough Monotonectaly myocardinate cross and functional niche markets and an functional.</p>
         <Link to="#" className='btn bg-purple button-default text-white fw-bold' onClick={(e)=>{e.preventDefault()}}> Read me</Link>
         <Link to="#" className='btn bg-warning button-default text-white fw-bold ms-4' onClick={(e)=>{e.preventDefault()}}>Buy Now</Link>
        </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
