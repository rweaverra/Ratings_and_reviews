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
  const [reviews, setReviews] = useState([]);
  const [ratings, setRatings] = useState({});
  const [error, setError] = useState(null);
  const [reviewsLoaded, setReviewsLoaded] = useState(false);
  const [ratingsLoaded, setRatingsLoaded] = useState(false);

  function getReviews() {
    axios.get('http://52.26.193.201:3000/reviews/1/list?sort=newest&count=100')
      .then((response) => {
        setReviewsLoaded(true);
        setReviews(response.data.results);
      });
  }

  function getRatings() {
    axios.get('http://52.26.193.201:3000/reviews/1/meta')
      .then((response) => {
        setRatingsLoaded(true);
        setRatings(response.data);
      });
  }

  function deleteReview(id) {
    const review = id.target.name;
    console.log(review);
    axios({
      method: 'put',
      url: `http://52.26.193.201:3000/reviews/report/${review}`,
    })
      .then((response) => {
        getReviews();
        console.log(response);
      });
  }

  useEffect(() => {
    getReviews();
    getRatings();
  }, []);

  if (!reviewsLoaded || !ratingsLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <Container>
      <Row>
        <Col sm={1} />
        <Col sm={4}>
          <Ratings ratings={ratings} />
        </Col>
        <Col sm={6}>
          <ReviewList
            reviews={reviews}
            getReviews={getReviews}
            deleteReview={deleteReview}
            ratings={ratings}
          />
        </Col>
        <Col sm={1} />
      </Row>
    </Container>
  );
}

export default App;
