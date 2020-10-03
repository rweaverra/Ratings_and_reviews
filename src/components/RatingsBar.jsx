import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { LinearProgress } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Container, Col, Row } from 'react-bootstrap';


function RatingsBar({
  ratings, totalRatings, thisValue, sortStarRatings,
}) {
  const percentageRatings = (ratings / totalRatings) * 100;

  return (
    <Container>
      <Row>
        <Col sm={6}>

          <button className="raw-rating-button" color="primary" type="button" value={thisValue} onClick={sortStarRatings} >{thisValue} star </button>
        </Col>
        <Col sm={6}>
          <LinearProgress className="raw-progress-bar" variant="determinate" value={percentageRatings} />
        </Col>
      </Row>
    </Container>
  );
}

export default RatingsBar;
