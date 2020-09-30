import React, { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Review from './Review.jsx';
import FormModal from './FormModal.jsx';
import SortReviews from './SortReviews.jsx';

function ReviewList(props) {
  const first = props.reviews[0];
  const second = props.reviews[1];

  const [displayedReviews, setDisplayedReviews] = useState([first, second]);
  const [counter, setCounter] = useState(2);

  function addReviews() {
    const nextReviews = props.reviews.slice(counter, counter + 2);
    const combineReviews = displayedReviews.concat(nextReviews);
    setDisplayedReviews(combineReviews);
    setCounter(counter + 2);
  }

  // Modal===========
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  function handleShow() { setShow(true); }

  // REVIEW SELECTION===================
  const handleReviewSort = (event) => {
    // call the api get request
    console.log('inside handleReviewSort');
  };

  const listReviews = displayedReviews.map((review, i) => <Review key={`${i}review`} review={review} getNewestReviews={props.getNewestReviews} deleteReview={props.deleteReview} ratings={props.ratings} />);

  return (
    <Container>
      <Row>
        <h2>Reviews</h2>
      </Row>
      <Row>
        <SortReviews
          getNewestReviews={props.getNewestReviews}
          getHelpfulReviews={props.getHelpfulReviews}
          getRelevantReviews={props.getRelevantReviews}
        />
      </Row>
      <Row>
        {listReviews}
      </Row>
      <Row>
        <button onClick={addReviews}>More Reviews Button</button>
        {' '}
        ||
        <button onClick={handleShow}>Add a review</button>

      </Row>
      <FormModal show={show} onHide={handleClose} getNewestReviews={props.getNewestReviews} />
    </Container>
  );
}

export default ReviewList;
