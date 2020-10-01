import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import Review from './Review.jsx';
import FormModal from './FormModal.jsx';
import SortReviews from './SortReviews.jsx';

function ReviewList({ratings, productId}) {

  const [reviews, setReviews] = useState([]);
  const first = reviews[1];
  const [displayedReviews, setDisplayedReviews] = useState([first]);
  const [counter, setCounter] = useState(2);

  function getNewestReviews() {
    axios.get(`http://52.26.193.201:3000/reviews/${productId}/list?sort=newest&count=30`)
      .then((response) => {
        console.log('inside get Newest Reviews api response', reviews);
        setReviews(response.data.results);
      });
  }

  function getHelpfulReviews() {
    axios.get(`http://52.26.193.201:3000/reviews/${productId}/list?sort=helpful&count=30`)
      .then((response) => {
        console.log('inside get Helpul Reviews api response', reviews);
        setReviews(response.data.results);
      });
  }

  function getRelevantReviews() {
    axios.get(`http://52.26.193.201:3000/reviews/${productId}/list?sort=relevant&count=30`)
      .then((response) => {
        console.log('inside get Relevant Reviews api response', reviews);
        setReviews(response.data.results);
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

  useEffect(() => {
    getNewestReviews();
  }, []);

  function addReviews() {
    const nextReviews = reviews.slice(counter, counter + 2);
    const combineReviews = displayedReviews.concat(nextReviews);
    setDisplayedReviews(combineReviews);
    setCounter(counter + 2);
  }

  // Modal===========
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  function handleShow() { setShow(true); }


  if(reviews.length === 0) {
    return <div></div>
  }

  return (
    <Container>
      <Row>
        <h2>Reviews</h2>
      </Row>
      <Row>
        <SortReviews
          getNewestReviews={getNewestReviews}
          getHelpfulReviews={getHelpfulReviews}
          getRelevantReviews={getRelevantReviews}
          ratings={ratings}
        />
      </Row>
      {reviews.map((review, i) => <Review key={`${i}review`} review={review} getNewestReviews={getNewestReviews} deleteReview={deleteReview} ratings={ratings} />)}
      <Row />
      <Row>
        <button onClick={addReviews}>More Reviews Button</button>
        {' '}
        ||
        <button onClick={handleShow}>Add a review</button>

      </Row>
      <FormModal show={show} onHide={handleClose} getNewestReviews={getNewestReviews} />
    </Container>
  );
}

export default ReviewList;
