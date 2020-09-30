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


  function getNewestReviews() {
    axios.get('http://52.26.193.201:3000/reviews/1/list?sort=newest&count=4')
      .then((response) => {
        console.log('inside get Newest Reviews api response', reviews)
        setReviews(response.data.results);


      });
  }

  function getHelpfulReviews() {
    axios.get('http://52.26.193.201:3000/reviews/1/list?sort=helpful&count=4')
      .then((response) => {
        console.log('inside get Helpul Reviews api response', reviews)
        setReviews(response.data.results);

      });
  }

  function getRelevantReviews() {
    axios.get('http://52.26.193.201:3000/reviews/1/list?sort=relevant&count=4')
      .then((response) => {
        console.log('inside get Relevant Reviews api response', reviews)
        setReviews(response.data.results);

      });
  }



  function getRatings() {
    axios.get('http://52.26.193.201:3000/reviews/1/meta')
      .then((response) => {
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
        getNewestReviews();
        console.log(response);
      });
  }

  React.useEffect(() => {
    getNewestReviews();
    getRatings();
  }, []);

  if (!ratings.ratings) {
    return <div />;
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
            getNewestReviews={getNewestReviews}
            getHelpfulReviews={getHelpfulReviews}
            getRelevantReviews={getRelevantReviews}
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
