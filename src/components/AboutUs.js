import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faLightbulb, faHandsHelping, faStar } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import teamMember1 from '../images/p1.jpg';
import teamMember2 from '../images/p2.jpg';
import teamMember3 from '../images/p3.jpg';

const AboutUs = () => {
  return (
    <Container className="my-5 about-us-container">
      <Row className="mb-4">
        <Col>
          <h1 className="about-heading">About Us</h1>
          <p className="about-description">
            Welcome to News Alley, your go-to source for the latest global news updates. Our mission is to deliver accurate, timely, and reliable news to keep you informed and engaged. We are dedicated to journalism that informs, educates, and sparks conversation.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6} className="mission-col">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-text">
            <FontAwesomeIcon icon={faGlobe} className="section-icon" />
            At News Alley, our mission is to provide comprehensive and unbiased news coverage. We strive to ensure that our content is not only informative but also engaging and thought-provoking.
          </p>
        </Col>
        <Col md={6} className="values-col">
          <h2 className="section-title">Our Values</h2>
          <ul className="values-list">
            <li><FontAwesomeIcon icon={faStar} className="values-icon" /> Integrity: Committed to truth and transparency.</li>
            <li><FontAwesomeIcon icon={faLightbulb} className="values-icon" /> Innovation: Embracing new technologies and ideas.</li>
            <li><FontAwesomeIcon icon={faHandsHelping} className="values-icon" /> Engagement: Fostering an interactive and inclusive community.</li>
            <li><FontAwesomeIcon icon={faStar} className="values-icon" /> Excellence: Upholding the highest standards in journalism.</li>
          </ul>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={12}>
          <h2 className="section-title">Meet Our Team</h2>
          <Row>
            <Col md={4}>
              <Card className="team-card">
                <Card.Img variant="top" src={teamMember1} className="team-image" />
                <Card.Body>
                  <Card.Title className="team-name">Jane Doe</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted team-position">Editor-in-Chief</Card.Subtitle>
                  <Card.Text className="team-bio">
                    Jane brings over 15 years of experience in journalism and is passionate about delivering high-quality news content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="team-card">
                <Card.Img variant="top" src={teamMember2} className="team-image" />
                <Card.Body>
                  <Card.Title className="team-name">John Smith</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted team-position">Senior Reporter</Card.Subtitle>
                  <Card.Text className="team-bio">
                    John specializes in investigative reporting and is dedicated to uncovering important stories.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="team-card">
                <Card.Img variant="top" src={teamMember3} className="team-image" />
                <Card.Body>
                  <Card.Title className="team-name">Emily Johnson</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted team-position">News Analyst</Card.Subtitle>
                  <Card.Text className="team-bio">
                    Emily provides in-depth analysis and commentary on current events to give readers a deeper understanding of the news.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-text">
            We value your feedback and are here to help. If you have any questions or suggestions, feel free to reach out to us through the following channels:
          </p>
          <ul className="contact-list">
            <li><FontAwesomeIcon icon={['fas', 'envelope']} className="contact-icon" /> Email: <a href="mailto:info@newsalley.com" className="contact-link">info@newsalley.com</a></li>
            <li><FontAwesomeIcon icon={['fas', 'phone']} className="contact-icon" /> Phone: <a href="tel:+1234567890" className="contact-link">+123 456 7890</a></li>
            <li><FontAwesomeIcon icon={['fas', 'map-marker-alt']} className="contact-icon" /> Address: 123 News Street, Media City, CA 12345</li>
          </ul>
          <div className="social-media-icons">
            <a href="https://facebook.com" className="social-icon"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://instagram.com" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://twitter.com" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
          <Button variant="primary" href="/contact" className="contact-button">Contact Us</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
