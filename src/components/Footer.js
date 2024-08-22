import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faPhoneAlt, faEnvelope, faLock, faLink, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row className="text-center text-md-start">
          {/* About Section */}
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-3">
              <FontAwesomeIcon icon={faInfoCircle} className="footer-icon" /> About Us
            </h5>
            <p>
              News Alley provides the latest updates from around the world. Stay informed with the top headlines from trusted sources.
            </p>
          </Col>

          {/* Links Section */}
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-3">
              <FontAwesomeIcon icon={faLink} className="footer-icon" /> Quick Links
            </h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/" className="footer-link">
                <FontAwesomeIcon icon={faHome} className="footer-icon" /> Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="footer-link">
                <FontAwesomeIcon icon={faInfoCircle} className="footer-icon" /> About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="footer-link">
                <FontAwesomeIcon icon={faPhoneAlt} className="footer-icon" /> Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/privacy" className="footer-link">
                <FontAwesomeIcon icon={faLock} className="footer-icon" /> Privacy Policy
              </Nav.Link>
            </Nav>
          </Col>

          {/* Contact Section */}
          <Col md={4}>
            <h5 className="text-uppercase mb-3">
              <FontAwesomeIcon icon={faAddressBook} className="footer-icon" /> Contact Us
            </h5>
            <p className="contact-info">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" /> 
              <strong>Email:</strong> <a href="mailto:support@newsalley.com" className="contact-link">support@newsalley.com</a>
              <br />
              <FontAwesomeIcon icon={faPhoneAlt} className="contact-icon" /> 
              <strong>Phone:</strong> <a href="tel:+1234567890" className="contact-link">+1 (123) 456-7890</a>
            </p>
            <div className="social-media-icons">
              <a href="https://facebook.com" className="social-icon" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://instagram.com" className="social-icon" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://twitter.com" className="social-icon" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </Col>
        </Row>

        <Row className="text-center mt-4">
          <Col>
            <p className="mb-0">
              &copy; {new Date().getFullYear()} News Alley. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
