import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './AllGallery.css';

function AllGallery() {
    const images = [
        "/img/biggallery_01 .jpg",
        "/img/biggallery_02 .jpg",
        "/img/biggallery_03 .jpg",
        "/img/biggallery_04 .jpg",
        "/img/biggallery_05 .jpg",
        "/img/biggallery_06 .jpg",
        "/img/biggallery_07 .jpg",
        "/img/biggallery_08 .jpg",
        "/img/biggallery_09 .jpg",
    ];

    return (
        <Container className='my-5 py-5 all-gallery'>
            <Row className='mx-auto'>
                {images.map((image, index) => (
                    <Col 
                        key={index} 
                        xs={12} 
                        sm={6} 
                        md={6}
                        lg={4} 
                        className="mb-4 gallery-item"
                    >
                        <Image 
                            src={image} 
                            alt={`Image ${index + 1}`} 
                            fluid 
                            className='gallery-image' 
                        />
                        <div className='gallery-overlay'>
                            <div className="overlay-bg"></div>
                        </div>
                        <div className="gallery-content pe-4">
                            <a href={image} className="icon-link">
                                <i className="fa fa-maximize icon "></i>
                            </a>
                            <h4 className='ff-bubblegum fw-bold  '>Product Name Here</h4>
                            <span>By: KidsAcademy Theme</span>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default AllGallery;