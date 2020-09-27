/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Ratings from './Ratings.jsx';
import ReviewList from './ReviewList.jsx';
import { exampleReview, exampleRating } from './exampleReview.js';

function App() {
  const initialState = exampleRating;
  const [reviews, setReviews] = useState([]);
  const [ratings, setRatings] = useState(initialState);
  const [error, setError] = useState(null);
  const [reviewsLoaded, setReviewsLoaded] = useState(false);
  const [ratingsLoaded, setRatingsLoaded] = useState(false);

  useEffect(() => {
    axios.get('http://52.26.193.201:3000/reviews/1/list')
      .then((response) => {
        setReviewsLoaded(true);
        setReviews(response.data.results);
      });
    axios.get('http://52.26.193.201:3000/reviews/4/meta')
      .then((response) => {
        setRatingsLoaded(true);
        setRatings(response.data);
      });
  }, []);

  if (!reviewsLoaded || !ratingsLoaded) {
    return <div>Loading...</div>;
  } else {
  return (
    <Container>
      <Row>
        <Col sm={6}>
          <Ratings ratings={ratings} />
        </Col>
        <Col sm={6}>
          <ReviewList reviews={reviews} />
        </Col>
      </Row>
    </Container>
  );
  }
}

export default App;
