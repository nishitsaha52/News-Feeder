import React from 'react';
import { Card, Button } from 'react-bootstrap';

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage, source, publishedAt } = article;

  return (
    <Card className="card-custom">
      {urlToImage && <Card.Img className="card-img" variant="top" src={urlToImage} alt={title} />}
      <Card.Body>
        <Card.Title className="card-title">{title}</Card.Title>
        <Card.Subtitle className="card-subtitle mb-2">
          {source.name} - {new Date(publishedAt).toLocaleDateString()}
        </Card.Subtitle>
        <Card.Text className="card-text">{description}</Card.Text>
        <Button
          className="card-button"
          variant="primary"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default NewsItem;
