import React, { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

function RatingsBar({
  ratings,
  totalRatings,
  thisValue,
  sortStarRatings,
  showClicked,
  starClick,

}) {
  const percentageRatings = (ratings / totalRatings) * 100;
  let cssStyle = 'raw-rating-button';


  showClicked.map((star) => {
    if (star === thisValue) {
      cssStyle = 'raw-clicked-rating-button';
    }
  });


  return (
    <Container style={{ width: '100%' }}>

      <Row>

        <span className="raw-ratings-first-column">
          <button className={cssStyle} type="button" value={thisValue} onClick={() => { sortStarRatings(thisValue); starClick(thisValue)}}>
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
