import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import ReportButton from './ReportButton.jsx';
import Helpful from './Helpful.jsx';
import StarRating from './StarRating.jsx';
import UserName from './UserName.jsx';

function Review(props) {
  if (!props.review) {
    return <div />;
  }
  return (
    <Container>
      <Row>
        <Col>
          <Box component="fieldset" mb={1} borderColor="transparent">
            <Rating name="read-only" value={props.review.rating} precision={0.25} readOnly />
          </Box>
        </Col>
        <Col>
          <UserName review={props.review} />
        </Col>
      </Row>
      <Row>
        <h3>{props.review.summary}</h3>
      </Row>
      <Row>
        response
        {props.review.response}
      </Row>
      <Row>
        Summary:
        {props.review.body}
      </Row>
      <Row>
        <Col>
          <Helpful review={props.review} getReviews={props.getNewestReviews} />
        </Col>
        <Col>
          <ReportButton review={props.review} getReviews={props.getNewestReviews} />
        </Col>
      </Row>
    </Container>

  );
}

export default Review;
