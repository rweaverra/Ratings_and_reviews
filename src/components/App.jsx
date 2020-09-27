import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Ratings from './Ratings.jsx';
import ReviewList from './ReviewList.jsx';
import { exampleReview, exampleRating } from './exampleReview.js';

function App(props) {
  const [reviews, setReviews] = useState([]);
  const [ratings, setRatings] = useState(exampleRating);

  useEffect(() => {
    axios.get('http://52.26.193.201:3000/reviews/1/list')
      .then((response) => {
        setReviews(response.data.results);
      });
    axios.get('http://52.26.193.201:3000/reviews/1/meta')
      .then((response) => {
        setRatings(response.data);
      });
  }, []);

  return (
    <Container>
      <Row>
        <Col sm={6}>
          <Ratings ratings={ratings} />
        </Col>
        <Col sm={6}>
          <ReviewList example={reviews} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
