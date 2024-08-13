import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Notfoundpage() {
  return (
    <div>
      <Container fluid style={{ backgroundColor: '#444', color: '#fff', minHeight: '100vh' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            textAlign: 'center',
            padding: '20px'
          }}
        >
          <div style={{ maxWidth: '600px', width: '100%' }}>
            <h1 style={{ margin: 0, fontSize: '10vw', lineHeight: '1', fontWeight: 'bold' }}>404</h1>
            <h2 style={{ marginTop: '20px', fontSize: '6vw' }}>Not Found</h2>
            <p className="text-center">
              Oops! Sorry, we couldn’t find the page you were looking for. If you think this is a problem with us,
              please contact us.
            </p>
            <Link to="/" className="btn bg-dark button-default text-white fw-bold mt-3">
              Go to Home Page
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Notfoundpage;
