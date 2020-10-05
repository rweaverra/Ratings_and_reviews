import React from 'react';
import {
  Container, Col, Row, Tabs,
} from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import ReportButton from './ReportButton.jsx';
import Helpful from './Helpful.jsx';
import StarRating from './StarRating.jsx';
import UserName from './UserName.jsx';

function Review(props) {
  if (!props.review) {
    return <div />;
  }

  return (
    <Container className="raw-individual-review">
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
        <h5>{props.review.summary}</h5>
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
        <Divider />

    </Container>

  );
}

export default Review;
