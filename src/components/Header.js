import React from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import DarkModeToggle from './DarkModeToggle';
import CategoryFilter from './CategoryFilter';
import logo from '../images/Logo1.png'; // Ensure the correct path to Logo1.png

const Header = ({ selectedCategory, setSelectedCategory, darkMode, setDarkMode }) => {
  return (
    <Navbar
      bg={darkMode ? 'dark' : 'light'}
      variant={darkMode ? 'dark' : 'light'}
      expand="lg"
      className="mb-4 navbar-custom"
      style={{ borderBottom: darkMode ? '2px solid #444' : '2px solid #ddd' }}
    >
      <Container>
        <Row className="w-100 align-items-center">
          <Col className="d-flex justify-content-start align-items-center">
            <Navbar.Brand href="/news" className="navbar-brand-custom">
              <img src={logo} alt="News Alley Logo" style={{ height: '50px' }} /> {/* Adjust height as needed */}
            </Navbar.Brand>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <CategoryFilter
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </Col>
          <Col className="d-flex justify-content-end align-items-center">
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;
