import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
function Notfoundpage() {
  return (
    <div>
      <Container fluid style={{backgroundColor:'#444', color:'#fff'}}>
      <div style={{height:'500px'  , minHeight:"100%" }} >   
        <div style={{textAlign:' center', width:'800px' , marginLeft: '-400px', position:'absolute' , top: '30%' ,left:'50%'}}>
        <h1 style={{margin:0, fontSize:'150px', lineHeight:'150px', fontWeight:'bold'}}>404</h1>
        <h2 style={{marginTop:'20px' ,fontSize: '30px'}}>Not Found</h2>
        <p className='text-center'>Oops! Sorry, we couldn’t find the page you were looking for. If you think this is a problem with us, please contact us</p>
        <Link to={"/"}className='btn bg-dark button-default text-white fw-bold'>Go to Home Page</Link>
        </div>
        </div>
    </Container>
    </div>
  )
}

export default Notfoundpage
