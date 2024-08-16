import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import './Popularclasses.css'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import classInfo from '../../json_api/Classes.json'
function Popularclasses({classNo}) {
   // Display only the first 3 classes
   const visibleClasses = classInfo.slice(0, classNo);
  return (
    <section className='popular my-5'>
        <Container>
            <Row className=' py-5'>
            <h3 className=' text-purple text-center ff-bubblegum fw-bold fs-40 '>Our Popular Classes</h3>
            <p className='  fs-6 text-center mt-2 px-250' style={{color:'#707070'}}>Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform.</p>
            </Row>
            <Row className=''>
            {
                visibleClasses.map((item)=>{
                    return(
                        <Col lg={4} md={6}  className='text-center  my-2' key={item.id}>
                        <div className='class-item' >
                        <img src={item.src} alt="class_01" className='img-fluid w-100' loading="lazy" />  
                        <ListGroup horizontal className='border border-1 rounded-0 border-end-0 border-start-0 ff-roboto'>
                        <ListGroup.Item className='w-100 rounded-0 bg-purple text-white ff-roboto fw-bold fs-15 lh-20'> 
                        <span>Class size</span> <span className='d-block'>{item.classSize}</span> 
                        </ListGroup.Item>
                        <ListGroup.Item className='w-100 rounded-0 bg-tomato text-white ff-roboto fw-bold fs-15 lh-20'> 
                        <span>Years Old</span> <span className='d-block'>{item.yearsOld}</span>
                        </ListGroup.Item>
                        <ListGroup.Item className='w-100 rounded-0 bg-orange text-white fw-bold fs-15 lh-20'>
                        <span>Tution Fee</span> <span className='d-block'>{item.tutionFee}</span>
                       </ListGroup.Item>
                         </ListGroup>
                          
                         <div className='p-4 text-start '>
                          <Link  to='class-single.html' className={` text-decoration-none fs-4 ff-bubblegum ${item.textColor} `}>{item.className}</Link>
                          <p className='text-tomato mb-0'>Class time : <span style={{color:'#707070'}}>{item.classTime}</span></p>
                          <p style={{color:'#707070'}}>{item.text}</p>
                          </div>
                          <div className={`text-white ${item.bgColor} text-start py-2 ps-3 ff-roboto `}> <i className='fa fa-home'></i>  218 New Newyork Road, USA- 1205</div>
                        </div>       
                        </Col>
                    )
                })
            }    
               
            </Row>
        </Container>
      
    </section>
  )
}

export default Popularclasses

