import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, Spinner, Card, Row, Col, Accordion } from 'react-bootstrap';

const SourceSelector = ({ selectedSources, setSelectedSources, darkMode }) => {
  const [groupedSources, setGroupedSources] = useState({});
  const [loading, setLoading] = useState(true);
  const [activeCountry, setActiveCountry] = useState('');

  useEffect(() => {
    const fetchSources = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines/sources?apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
        );
        const filteredSources = filterSources(response.data.sources);
        groupSourcesByCountry(filteredSources);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching sources:', error);
        setLoading(false);
      }
    };

    const filterSources = (sources) => {
      const allowedCountries = ['us', 'gb', 'fr', 'de', 'in', 'sa', 'ru', 'zh'];

      const topUSASources = [
        'bloomberg',
        'business-insider',
        'cnn',
        'espn',
        'fox-news',
        'ign',
        'reuters',
        'the-wall-street-journal',
        'the-washington-times',
        'time',
        'usa-today',
        'wired',
      ];

      return sources.filter((source) => {
        if (source.country === 'us' && !topUSASources.includes(source.id)) {
          return false;
        }
        return allowedCountries.includes(source.country);
      });
    };

    const groupSourcesByCountry = (sources) => {
      const grouped = sources.reduce((acc, source) => {
        const country = source.country.toUpperCase();
        const countryName = countryNames[country] || country;
        if (!acc[countryName]) {
          acc[countryName] = [];
        }
        acc[countryName].push(source);
        return acc;
      }, {});
      setGroupedSources(grouped);
    };

    fetchSources();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedSources((prev) =>
      prev.includes(value)
        ? prev.filter((source) => source !== value)
        : [...prev, value]
    );
  };

  const handleSelectAll = () => {
    if (activeCountry) {
      const allSourceIds = groupedSources[activeCountry].map((source) => source.id);
      setSelectedSources((prev) => [...new Set([...prev, ...allSourceIds])]);
    }
  };

  const handleClearAll = () => {
    if (activeCountry) {
      const allSourceIds = groupedSources[activeCountry].map((source) => source.id);
      setSelectedSources((prev) => prev.filter((source) => !allSourceIds.includes(source)));
    }
  };

  const handleAccordionToggle = (country) => {
    setActiveCountry(activeCountry === country ? '' : country);
  };

  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }

  return (
    <div className={`source-selector ${darkMode ? 'source-selector-dark' : 'source-selector-light'}`}>
      <Accordion activeKey={activeCountry} onSelect={handleAccordionToggle}>
        {Object.keys(groupedSources).map((country) => (
          <Accordion.Item eventKey={country} key={country}>
            <Accordion.Header className="accordion-header">{country}</Accordion.Header>
            <Accordion.Body>
              <Row className="mb-3">
                <Col className="text-center">
                  <Button
                    variant="primary"
                    size="sm"
                    className="select-all-btn"
                    onClick={handleSelectAll}
                  >
                    Select All
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={handleClearAll}
                  >
                    Clear All
                  </Button>
                </Col>
              </Row>
              <Row>
                {groupedSources[country].map((source) => (
                  <Col md={12} key={source.id} className="mb-3">
                    <Card className="card-custom">
                      <Card.Body>
                        <Form.Check
                          type="checkbox"
                          label={source.name}
                          value={source.id}
                          checked={selectedSources.includes(source.id)}
                          onChange={handleChange}
                        />
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

const countryNames = {
  US: 'United States',
  GB: 'United Kingdom',
  FR: 'France',
  DE: 'Germany',
  IN: 'India',
  SA: 'Saudi Arabia',
  RU: 'Russia',
  ZH: 'China',
};

export default SourceSelector;
