import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ReportButton from './ReportButton.jsx';
import Helpful from './Helpful.jsx';
import StarRating from './StarRating.jsx';

function Review(props) {
  if (!props.review) {
    return <div />;
  }
  return (
    <Container>
    <Row>
      <StarRating ratings={props.ratings}/>
      </Row>
      <Row>
        <h3>{props.review.summary}</h3>
      </Row>
      <Row>
        rating:
        {props.review.rating}
        </Row>
      <Row>
        Summary:
        {props.review.body}
        </Row>
        <Row>
            <Col>
              <Helpful review={props.review} getReviews={props.getReviews} />
              </Col>
            <Col>
              <ReportButton review={props.review} getReviews={props.getReviews} deleteReview={props.deleteReview} />
              </Col>
            </Row>
        </Container>


  );
}

export default Review;
