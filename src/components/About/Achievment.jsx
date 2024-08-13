import React from 'react';
import CountUp from 'react-countup';
import { Container, Row, Col } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useInView } from 'react-intersection-observer';
import './Achievment.css';

function Achievment() {
  const { ref: counterRef, inView } = useInView({
    trigger: true,  // Trigger only once
    threshold: 0.1,     // Trigger when 10% of the element is visible
  });

  return (
    <section className="animated-counter achievment section-notch  text-white my-5 " ref={counterRef}>
      <Container>
        <Row className="text-center">
          <Col sm={12}  md={6} lg={3}>
            <div className="counter">
              <i className="fa fa-user-graduate fs-50 d-block mb-3"></i>
              {inView && (
                <CountUp className='fs-48 fw-700' start={0} end={320} duration={2.75} separator="," />
              )}
              <span className='fs-48 fw-700'>+</span>
              <h3 className="text-white fs-5 fw-bold">Total Students</h3>
            </div>
          </Col>
          <Col sm={12}  md={6} lg={3}>
            <div className="counter">
              <i className="fa fa-chalkboard-teacher fs-50 d-block mb-3"></i>
              {inView && (
                <CountUp className='fs-48 fw-700' start={0} end={12} duration={2.75} separator="," />
              )}
              <h3 className="text-white fs-5 fw-bold">Class Rooms</h3>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="counter">
              <i className="fa fa-bus fs-50 d-block mb-3"></i>
              {inView && (
                <CountUp className='fs-48 fw-700' start={0} end={24} duration={2.75} separator="," />
              )}
              <h3 className="text-white fs-5 fw-bold">Schools Bus</h3>
            </div>
          </Col>
          <Col sm={12}  md={6} lg={3}>
            <div className="counter">
              <i className="fa fa-user fs-50 d-block mb-3"></i>
              {inView && (
                <CountUp className='fs-48 fw-700' start={0} end={15} duration={2.75} separator="," />
              )}
              <h3 className="text-white fs-5 fw-bold">Total Teachers</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Achievment;
