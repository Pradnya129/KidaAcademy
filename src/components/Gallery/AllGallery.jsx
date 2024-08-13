import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

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
        <Container className='my-5 py-5'>
            <Row className='mx-auto'>
                {images.map((image, index) => (
                    <Col key={index} xs={12} md={4} sm={6}  className="mb-4">
                        <Image src={image} alt={`Image ${index + 1}`} fluid className='h-100 w-100' />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default AllGallery;
