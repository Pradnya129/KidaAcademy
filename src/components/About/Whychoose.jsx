import React from 'react'
import { Col,Container,Row } from 'react-bootstrap'

function Whychoose() {
  return (
    <section className='whychoose my-5'>
      <Container>
      <Row className=' p3-5'>
            <h3 className=' text-purple text-center ff-bubblegum fw-bold fs-40 '>Why Choose KidsAcademy</h3>
            <p className='  fs-6 text-center mt-2 px-250' style={{color:'#707070'}}>Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform.</p>
            </Row>
            <Row>
                <Col lg={6} xl={4}>
                 <div className="feature-left">
                   <div className="feature-item text-xl-end text-center icon-box" >
                   <i className="fa fa-user text-white bg-warning float-xl-end float-sm-none mx-auto ms-xl-4 mt-3 mb-xl-3 mx-sm-auto rounded-circle fs-1 text-center d-flex align-items-center justify-content-center icon-rotate" style={{width:'80px',height:'80px'}} aria-hidden="true" ></i>
                   <h3 className="ff-bubblegum  text-warning ">Expert Teachers</h3>
                   <p className='text-grey text-xl-end'>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
                   </div>
                   <div className="feature-item text-xl-end text-center icon-box" >
                   <i className="fa fa-globe text-white bg-orange float-xl-end float-sm-none mx-auto  mx-sm-auto ms-xl-3 mt-3 mb-3 rounded-circle fs-1 text-center d-flex align-items-center justify-content-center icon-rotate" style={{width:'80px',height:'80px'}} aria-hidden="true" ></i>
                   <h3 className="ff-bubblegum  text-orange">Multimedia Class</h3>
                   <p className='text-grey text-xl-end'>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
                   </div>
                   <div className="feature-item text-xl-end text-center icon-box" >
                   <i className="fa fa-microphone text-white bg-blue float-xl-end float-sm-none mx-sm-auto mx-auto  ms-xl-3 mt-3 mb-3 rounded-circle fs-1 text-center d-flex align-items-center justify-content-center icon-rotate" style={{width:'80px',height:'80px'}} aria-hidden="true" ></i>
                   <h3 className="ff-bubblegum  text-blue ">Music And Art Classes</h3>
                   <p className='text-grey text-xl-end'>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
                   </div>
                   
                 </div>
                </Col>
                <Col lg={6} xl={4}>
                 <div className="feature-img">
                    <img src="img/feature.jpg" alt="feature-img" className='fluid-img w-100' />
                 </div>
                </Col>
                <Col lg={12}xl={4} className='text-lg-center '>
                <div className="feature-right">
                <div className="feature-item text-xl-start text-center icon-box" >
                   <i className="fa fa-home text-white bg-tomato float-xl-start float-sm-none mx-sm-auto mx-auto  me-xl-4 mt-3 mb-3 rounded-circle fs-1 text-center d-flex align-items-center justify-content-center icon-rotate" style={{width:'80px',height:'80px'}} aria-hidden="true" ></i>
                   <h3 className="ff-bubblegum  text-tomato px-md-5 px-lg-0 ">Expert Teachers</h3>
                   <p className='text-grey text-xl-start text-center px-md-5 px-lg-0'>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
                   </div>
                   <div className="feature-item text-xl-start text-center icon-box" >
                   <i className="fa fa-link text-white bg-purple float-xl-start float-sm-none mx-sm-auto mx-auto me-xl-4 mt-3 mb-3 rounded-circle fs-1 text-center d-flex align-items-center justify-content-center icon-rotate" style={{width:'80px',height:'80px'}} aria-hidden="true" ></i>
                   <h3 className="ff-bubblegum  text-purple">Multimedia Class</h3>
                   <p className='text-grey text-xl-start text-center px-md-5 px-lg-0'>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
                   </div>
                   <div className="feature-item text-xl-start text-center icon-box" >
                   <i className="fa fa-lightbulb-o text-white bg-pink float-xl-start float-sm-none mx-sm-auto mx-auto me-xl-4 mt-3 mb-3 rounded-circle fs-1 text-center d-flex align-items-center justify-content-center icon-rotate" style={{width:'80px',height:'80px'}} aria-hidden="true" ></i>
                   <h3 className="ff-bubblegum  text-pink ">Music And Art Classes</h3>
                   <p className='text-grey text-xl-start text-center px-md-5 px-lg-0 '>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
                   </div>
                </div>
                </Col>
            </Row>
      </Container>
    </section>
  )
}

export default Whychoose
