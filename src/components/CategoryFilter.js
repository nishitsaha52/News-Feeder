import React from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faFilm, faNewspaper, faHeartbeat, faFlask, faFutbol, faLaptop } from '@fortawesome/free-solid-svg-icons';

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
    { name: 'business', icon: faBriefcase },
    { name: 'entertainment', icon: faFilm },
    { name: 'general', icon: faNewspaper },
    { name: 'health', icon: faHeartbeat },
    { name: 'science', icon: faFlask },
    { name: 'sports', icon: faFutbol },
    { name: 'technology', icon: faLaptop },
  ];

  return (
    <Nav className="mb-3 justify-content-center">
      {categories.map(({ name, icon }) => (
        <Nav.Item key={name} className="nav-item">
          <Nav.Link
            active={selectedCategory === name}
            onClick={() => setSelectedCategory(name)}
            className={`nav-link ${selectedCategory === name ? 'active' : ''}`}
          >
            <FontAwesomeIcon icon={icon} className="me-2" />
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default CategoryFilter;
