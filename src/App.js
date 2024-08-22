import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faTags } from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header';
import Footer from './components/Footer';
import SourceSelector from './components/SourceSelector';
import NewsList from './components/NewsList';
import Pagination from './components/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import HomePage from './components/HomePage'; // Import HomePage component

function App() {
  const [selectedSources, setSelectedSources] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className='body'>
      <div className={darkMode ? 'bg-dark text-light min-vh-100' : 'bg-light text-dark min-vh-100'}>
      <Header
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <Container className="my-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/news" element={
              <Row>
                <Col xs={12} md={8} lg={9}>
                  <Card className="mb-4 border-0 shadow-sm">
                    <Card.Body>
                      <h1 className="text-center mb-4">
                        <FontAwesomeIcon icon={faNewspaper} className="me-2" />
                        Today's Headlines
                      </h1>
                      <NewsList
                        selectedSources={selectedSources}
                        selectedCategory={selectedCategory}
                        currentPage={currentPage}
                        setTotalPages={setTotalPages}
                      />
                      <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        setCurrentPage={setCurrentPage}
                      />
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} md={4} lg={3}>
                  <Card className="border-0 shadow-sm">
                    <Card.Body>
                      <h2 className="text-center mb-4">
                        <FontAwesomeIcon icon={faTags} className="me-2" />
                        News Sources
                      </h2>
                      <SourceSelector
                        selectedSources={selectedSources}
                        setSelectedSources={setSelectedSources}
                        darkMode={darkMode}
                      />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            } />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </Container>
        <Footer />
      </div>
      </div>
    </Router>
  );
}

export default App;
