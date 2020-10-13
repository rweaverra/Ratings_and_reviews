import React, { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

function RatingsBar({
  ratings,
  totalRatings,
  thisValue,
  sortStarRatings,

}) {
  const percentageRatings = (ratings / totalRatings) * 100;

  return (
    <Container style={{ width: '100%' }}>

      <Row>

        <span className="raw-ratings-first-column">
          <button className="raw-rating-button" type="button" value={thisValue} onClick={() => { sortStarRatings(thisValue); }}>
            {thisValue}
            {' '}
            star
            {' '}
          </button>

          <progress className="raw-progressBar" max="100" value={percentageRatings} />
        </span>

      </Row>
    </Container>
  );
}

export default RatingsBar;
