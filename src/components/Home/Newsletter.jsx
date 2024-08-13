import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Newsletter.css'

function Newsletter() {
  return (
    <section className="newsletter py-5 my-5 bg-purple text-center section-notch position-relative">
      <Container>
        <Row>
          <Col lg={4} sm={12}>
            <h3 className=" text-white text-start  ff-bubblegum fw-bold fs-2 ">
              Join Our Newsletter{" "}
            </h3>
          </Col>
          <Col lg={8} sm={12}>
            <Form className="row">
              <Form.Group
                className="mb-3  float-start col-lg-8 col-md-12 col-sm-12 col-12 col-xl-8 mt-3 mt-lg-0 "
                controlId="exampleForm.ControlInput1 "
              >
                <Form.Control
                  type="email"
                  placeholder="Enter your email here"
                  className="fst-italic bg-purple rounded-0  py-sm-3 py-2 border-2 text-white ps-4   outline-none custom-placeholder "
                  style={{ border: "2px solid rgba(255, 255, 255, .5)"}}
                />
              </Form.Group> 
            
              <Link
                to={"/subscribe_now"}
                className="btn  col-lg-4 col-xl-4 col-md-3 col-sm-3 col-5    mx-auto rounded-0 py-sm-3 py-2 px-xl-5   px-2 border-2 border-white bg-white text-purple fst-italic  fw-bold    h-100"
              >
                Subscribe Now
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Newsletter;
