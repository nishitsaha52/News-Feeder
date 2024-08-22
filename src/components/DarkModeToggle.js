import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <Button
      variant={darkMode ? 'light' : 'dark'}
      onClick={() => setDarkMode(!darkMode)}
      className="mb-3 dark-mode-button d-flex align-items-center" // Added flex and align-items-center
      aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <FontAwesomeIcon
        icon={darkMode ? faSun : faMoon}
        className="me-2" // Margin to the right of the icon
      />
      {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </Button>
  );
};

export default DarkModeToggle;
