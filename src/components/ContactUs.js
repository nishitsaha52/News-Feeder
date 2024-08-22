import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {
      name: !formData.name,
      email: !formData.email,
      message: !formData.message
    };
    setErrors(newErrors);

    let errorMessages = '';
    if (newErrors.name) errorMessages += 'Name is required.\n';
    if (newErrors.email) errorMessages += 'Email is required.\n';
    if (newErrors.message) errorMessages += 'Message is required.\n';

    if (errorMessages) {
      setModalMessage(errorMessages);
      setShowModal(true);
    }

    return !Object.values(newErrors).includes(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission logic here
      console.log('Form data submitted:', formData);
      toast.success('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleModalClose = () => setShowModal(false);

  return (
    <Container className="contact-container my-5">
      <Row className="g-4">
        <Col md={12} lg={6}>
          <h1 className="contact-heading">Contact Us</h1>
          <Form className="contact-form" onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                isInvalid={errors.name}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={errors.email}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email address.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                isInvalid={errors.message}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your message.
              </Form.Control.Feedback>
            </Form.Group>
            <br />
            <Button variant="primary" type="submit" className="w-100">
              Send
            </Button>
          </Form>
        </Col>
        <Col md={12} lg={6}>
          <h1 className="contact-heading">Contact Information</h1>
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope size={30} className="contact-icon" />
              <a href="mailto:support@newsalley.com" className="contact-link">support@newsalley.com</a>
            </div>
            <div className="contact-item">
              <FaPhone size={30} className="contact-icon" />
              <a href="tel:+11234567890" className="contact-link">+1 (123) 456-7890</a>
            </div>
            <h2 className="social-media-heading">Follow Us</h2>
            <div className="social-media-links">
              <a href="https://www.facebook.com/newsalley" target="_blank" rel="noopener noreferrer">
                <FaFacebookF size={30} className="social-icon" />
              </a>
              <a href="https://www.instagram.com/newsalley" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} className="social-icon" />
              </a>
              <a href="https://twitter.com/newsalley" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={30} className="social-icon" />
              </a>
            </div>
          </div>
        </Col>
      </Row>

      {/* Validation Error Modal */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Validation Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalMessage.split('\n').map((msg, index) => (
            <div key={index}>{msg}</div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      

      <ToastContainer />
    </Container>
  );
};

export default ContactUs;
