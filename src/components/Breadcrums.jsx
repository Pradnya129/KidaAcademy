import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Breadcrums({ data }) {
  return (
    <section className='section-notch about p-5 text-center'>
      <Container>
        <Row className='py-5 my-2'>
          <h3 className='text-white ff-bubblegum fw-bold fs-1'>{data.headingName}</h3>
          <p className='text-white fst-italic fs-5'>
            <Link to="/" className='text-decoration-none text-white'>Home</Link>
            <span> - {data.linkName}     </span>
          </p>
        </Row>
      </Container>
    </section>
  );
}

export default Breadcrums;
