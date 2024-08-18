import React from 'react'
import { Col,Container,Row } from 'react-bootstrap'


let Content = [
  { 
    id: "1",
    boxClasses: "mx-auto ms-xl-4 mt-3 mb-xl-3 mx-sm-auto",
    textColor: "text-warning",
    bgColor: "bg-warning",
    heading: "Expert Teachers",
    para: "Distinctively enhance empowered and alignments without leveraged architectures professionally.",
    icon: "fa-user"
  },
  { 
    id: "2",
    boxClasses: "mx-auto mx-sm-auto ms-xl-3 mt-3 mb-3",
    textColor: "text-orange",
    bgColor: "bg-orange",
    heading: "Multimedia Class",
    para: "Distinctively enhance empowered and alignments without leveraged architectures professionally.",
    icon: "fa-globe"
  },
  { 
    id: "3",
    boxClasses: "mx-sm-auto mx-auto ms-xl-3 mt-3 mb-3",
    textColor: "text-blue",
    bgColor: "bg-blue",
    heading: "Music And Art Classes",
    para: "Distinctively enhance empowered and alignments without leveraged architectures professionally.",
    icon: "fa-microphone"
  },
  { 
    id: "4",
    boxClasses: "mx-sm-auto mx-auto me-xl-4 mt-3 mb-3",
    textColor: "text-tomato px-md-5 px-lg-0",
    bgColor: "bg-tomato",
    heading: "Expert Teachers",
    para: "Distinctively enhance empowered and alignments without leveraged architectures professionally.",
    icon: "fa-home"
  },
  { 
    id: "5",
    boxClasses: "mx-sm-auto mx-auto me-xl-4 mt-3 mb-3",
    textColor: "text-purple",
    bgColor: "bg-purple",
    heading: "Multimedia Class",
    para: "Distinctively enhance empowered and alignments without leveraged architectures professionally.",
    icon: "fa-link"
  },
  { 
    id: "6",
    boxClasses: "mx-sm-auto mx-auto me-xl-4 mt-3 mb-3",
    textColor: "text-pink",
    bgColor: "bg-pink",
    heading: "Music And Art Classes",
    para: "Distinctively enhance empowered and alignments without leveraged architectures professionally.",
    icon: "fa-lightbulb-o"
  }
];

function Whychoose() {
  let leftContent=Content.slice(0,3);
  let rightContent=Content.slice(3,Content.length);
  return (
    <section className='whychoose my-5'>
      <Container>
      <Row className=' p3-5'>
            <h3 className='text-purple text-center ff-bubblegum fw-bold fs-40 '>Why Choose KidsAcademy</h3>
            <p className='fs-6 text-center mt-2 px-250' style={{color:'#707070'}}>Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform.</p>
            </Row>
            <Row>
                <Col lg={6} xl={4}>
                 <div className="feature-left">
                  {
                    leftContent.map((item)=>{
                    return(
                      <div className="feature-item text-xl-end text-center icon-box" key={item.id} >
                      <i className={`fa ${item.icon} text-white ${item.bgColor} float-xl-end float-sm-none ${item.boxClasses} rounded-circle fs-1 text-center d-flex align-items-center justify-content-center icon-rotate`} style={{width:'80px',height:'80px'}} aria-hidden="true" ></i>
                      <h3 className={`ff-bubblegum  ${item.textColor}`}>{item.heading}</h3>
                      <p className='text-grey text-xl-end'>{item.para}</p>
                      </div>
                    )

                    })
                  }
                  
                 </div>
                </Col>
                <Col lg={6} xl={4}>
                 <div className="feature-img">
                    <img src="/img/feature.jpg" alt="feature-img" className='fluid-img w-100' />
                 </div>
                </Col>
                <Col lg={12}xl={4} className='text-lg-center '>
                <div className="feature-right">
                  {
                    rightContent.map((item)=>{
                      return(
                        <div className="feature-item text-xl-start text-center icon-box"  key={item.id} >
                        <i className={`fa ${item.icon} text-white ${item.bgColor} float-xl-start float-sm-none  mx-sm-auto mx-auto  me-xl-4 mt-3 mb-3   rounded-circle fs-1 text-center d-flex align-items-center justify-content-center icon-rotate`} style={{width:'80px',height:'80px'}} aria-hidden="true" ></i>
                        <h3 className={`ff-bubblegum  ${item.textColor} px-md-5 px-lg-0 `}>{item.heading}</h3>
                        <p className='text-grey text-xl-start text-center px-md-5 px-lg-0'>{item.para}</p>
                        </div>
                      )
                    })
                  }
              
                </div>
                </Col>
            </Row>
      </Container>
    </section>
  )
}

export default Whychoose
