import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../styles/contact.css';

const ContactPage = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <h1>Contact Us</h1>
          <p>
            We'd love to hear from you. For general inquiries, support requests, or partnership
            opportunities please use the email address in the footer.
          </p>

          <hr />

          <h5>Developed by</h5>
          <p>
            <a href="https://dagimbekelebunera.vercel.app" target="_blank" rel="noopener noreferrer">
              dagimbekelebunera.vercel.app
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
