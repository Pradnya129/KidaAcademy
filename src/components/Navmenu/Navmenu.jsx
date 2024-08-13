import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import navjson from "../../json_api/Navmenu.json";
import '../../App.css'

function Navmenu() {
  return (
    <>
          <Navbar expand="lg" className="bg-body-tertiary py-3">
      <Container fluid>
        <Link to="/">
        <img src="./logo.png" alt="logo" className='logo-img' />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {
              navjson.map((item)=>{
               return(
                <Link to={item.path} className={`ms-2 fs-5 nav-link fw-bold ${item.textCSS}`}   key={item.id}>{item.menu}</Link>
              )
              })
            }
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  )
}

export default Navmenu
