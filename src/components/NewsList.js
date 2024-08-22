import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Spinner, Alert } from 'react-bootstrap';
import NewsItem from './NewsItem';

const NewsList = ({
  selectedSources,
  selectedCategory,
  currentPage,
  setTotalPages,
}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      setError(null);

      const sourcesParam = selectedSources.length > 0 ? selectedSources.join(',') : undefined;
      const categoryParam = selectedCategory || undefined;
      const countryParam = sourcesParam ? undefined : 'in'; // Default to IN if no sources are selected

      console.log('Fetching articles with parameters:', {
        sourcesParam,
        categoryParam,
        page: currentPage,
        countryParam,
      });

      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines`, {
            params: {
              sources: sourcesParam,
              category: categoryParam,
              page: currentPage,
              pageSize: 6,
              country: countryParam,
              apiKey: 'cb7a1de9dfb0493fa1a117773ce654b4'
            }
          }
        );

        console.log('API Response:', response.data);

        if (response.data.articles) {
          setArticles(response.data.articles);
          setTotalPages(Math.ceil(response.data.totalResults / 6));
        } else {
          setError('No articles found. Please try different filters.');
        }
      } catch (err) {
        console.error('Error fetching articles:', err);
        setError('Failed to fetch articles. Please try again later.');
      }

      setLoading(false);
    };

    fetchArticles();
  }, [
    selectedSources,
    selectedCategory,
    currentPage,
    setTotalPages,
  ]);

  if (loading) {
    return (
      <div className="spinner-container">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return <Alert className="alert-custom" variant="danger">{error}</Alert>;
  }

  if (articles.length === 0) {
    return <Alert className="alert-custom" variant="info">No articles available. Please try different filters.</Alert>;
  }

  return (
    <Row className="row-custom">
      {articles.map((article, index) => (
        <Col md={4} key={index} className="col-custom">
          <NewsItem article={article} />
        </Col>
      ))}
    </Row>
  );
};

export default NewsList;
