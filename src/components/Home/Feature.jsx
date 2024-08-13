import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import './Feature.css'

const featureInfo=[
  {
     id:"1",
    icon:"fa-lightbulb-o",
    heading:"Active Learning",
    text:"Uniquely productivate real time collaboration idea-sharing after awesome quality vectors after",
    Color:"tomato"
  },
  { 
     id:"2",
    icon:"fa-user-o",
    heading:"Expert Teachers",
    text:"Uniquely productivate real time collaboration idea-sharing after awesome quality vectors after",
    Color:"warning"
  },
  { 
     id:"3",
    icon:"fa-globe",
    heading:"Strategi Location",
    text:"Uniquely productivate real time collaboration idea-sharing after awesome quality vectors after",
    Color:"orange"
  },
  { 
     id:"4",
    icon:"fa-link py-4",
    heading:"Full Day Programs",
    text:"Uniquely productivate real time collaboration idea-sharing after awesome quality vectors after",
    Color:"purple"
  }

]

function Feature() {
  return (
    <section className='feature my-5 mx-5 py-lg-5'>
      <Container>
        <Row>
         {
          featureInfo.map((item,index)=>{
            return(
              <Col lg={3} md={6} sm={6} key={item.id} className='text-center icon-box d-flex  flex-column align-items-center mb-md-4 mb-sm-4 mb-xs-4 ' >
               <i className={`fa ${item.icon} text-white bg-${item.Color}  mb-3 rounded-pill fs-1 text-center d-flex align-items-center justify-content-center icon-rotate`} style={{width:'100px',height:'100px'}} aria-hidden="true" ></i>
               <h3 className={`ff-bubblegum mb-3 text-${item.Color} `}>{item.heading}</h3>
               <p className='text-center px-xl-3 px-lg-1 mx-auto   px-sm-4' style={{color:'#707070'}} >{item.text}</p>
             </Col>
            )
          })
         }
          
        </Row>
      </Container>
    </section>
  )
}

export default Feature
              


