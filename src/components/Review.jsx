import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ReportButton from './ReportButton.jsx';
import Helpful from './Helpful.jsx';
import StarRating from './StarRating.jsx';

function Review(props) {
  if (!props.review) {
    return <div />;
  }
  return (
    <div>
      <StarRating />
      <h3>{props.review.summary}</h3>
      <div>
        rating:
        {props.review.rating}
      </div>
      <div>
        Summary:
        {props.review.body}
      </div>
      <div>
        <Container>
          <Row>
            <Col>
              <Helpful review={props.review} getReviews={props.getReviews} />
              </Col>
            <Col>
              <ReportButton review={props.review} getReviews={props.getReviews} deleteReview={props.deleteReview} />
              </Col>
            </Row>
        </Container>
      </div>
    </div>
  );
}

export default Review;
