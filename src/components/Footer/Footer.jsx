import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import './Footer.css';
import data from "../../json_api/Footer.json"

const latestNews=[
  { 
    id : "1",
    img:"/img/footer_post_01.jpg",
    text:"Corem psum dolor the amectetuer adipiscing...",
    date:"04 February 2021"
  },
  {  
    id :"2",
    img:"/img/footer_post_02.jpg",
    text:"Corem psum dolor the amectetuer adipiscing...",
    date:"28 January 2021"
  },
  { 
    id:"3",
    img:"/img/footer_post_03.jpg",
    text:"Corem psum dolor the amectetuer adipiscing...",
    date:"03 January 2021"
  }
]

const twitterWigdet=[
  {  id:"1",
    img:"fa fa-twitter p-1 rounded-pill text-light bg-warning mt-1",
    text:"Raritas etiam processus them dynamicus sequitur mutatem education theme",
    date:"23 seconds ago"
  },
  {  id:"2",
    img:"fa fa-twitter p-1 rounded-pill text-light bg-tomato",
    text:"Duis autem veleum iriu dolor hendrerit in vulputate velit",
    date:"8 seconds ago"
  },
  { id:"3",
    img:"fa fa-twitter p-1 rounded-pill text-light bg-orange",
    text:"@frankdoe amber tempor cum soluta nobis eleifend",
    date:"3 seconds ago"
  }
]
function Footer() {
  return (
    <>
   <footer className='my-lg-4 my-sm-5 my-5 py-lg-5 px-sm-4'>
    <Container>
      <Row>
        <Col lg={3} md={6} sm={12}className='px-md-0 ' >
        <img src="./logo.png" alt=""  className='mb-3 my-sm-2 ' />
        <p className='m-0 text-grey'>Distily enable team driven services through extensive is a relatonships platforms with interactive content. Enthusiastically scale effective.</p>

        <ul className='list-unstyled mt-4'>
        {
           data.map((data)=>{
            return (
            <li className='mb-3'  key ={data.id}>
              <span className='me-3' >
               <i className={data.icon} aria-hidden="true"></i>
               </span>
             {data.text}
             </li>
            )

           })
          }
          
        </ul>
        </Col>
        <Col lg={3} md={6} sm={12} className= 'my-md-2 ' >
        <h2 className='text-warning ff-bubblegum fw-bold mb-lg-5 mb-md-5 mb-sm-2 mb-3 mt-2 mt-xl-0 '>Latest News</h2>

        {
          latestNews.map((item)=>{

             return(
              <div className='d-flex  align-items-start mb-4 gap-3' key={item.id}>
              <a href="single.html">   <img src={item.img} alt="" /> </a>
              <div>
               <p className='mb-1 text-grey'>{item.text}</p>
                <div className='date text-warning '> {item.date}</div>
              </div>
             </div>
     
            )
          })
        
          }  
        
        
        </Col>
        <Col lg={3} md={6} sm={12} className=' my-md-2' >
        <h2 className='text-tomato mb-lg-5 ff-bubblegum  mt-2 mt-xl-0 mb-3'>Twitter Widget</h2>
         {
         twitterWigdet.map((item)=>{
          return(
            <div className='d-flex  align-items-start mb-4 gap-3' key={item.id}>
              <i className={item.img} ></i>
            <div>
             <p className='mb-1 text-grey'>{item.text}</p>
              <div className='date text-tomato'> {item.date}</div>
            </div>
           </div>
          )         
         })
        }
        </Col>
        <Col lg={3} md={6} sm={12}className='my-md-2' >
        <h2 className='text-orange fw-bold mb-lg-5 ff-bubblegum  mt-2 mt-xl-0 mb-3'>Recent Photos</h2>

        <div className='d-flex gap-2 mb-2 mx-sm-auto'>
          <img src="/img/gallery_01.jpg" alt="gallery_01" />
          <img src="/img/gallery_02.jpg" alt="gallery_02" />
          <img src="/img/gallery_03.jpg" alt="gallery_03" />
        </div>
        <div className='d-flex gap-2 mb-2'>
          <img src="/img/gallery_04.jpg" alt="gallery_04" />
          <img src="/img/gallery_05.jpg" alt="gallery_05" />
          <img src="/img/gallery_06.jpg" alt="gallery_06" />
        </div>
        <div className='d-flex gap-2'>
          <img src="/img/gallery_07.jpg" alt="gallery_07" />
          <img src="/img/gallery_08.jpg" alt="gallery_08" />
          <img src="/img/gallery_09.jpg" alt="gallery_09" />
        </div>
        </Col>
      </Row>
    </Container>
   </footer>
    </>
  )
}

export default Footer
