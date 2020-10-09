import React, { useState } from 'react';
import { LinearProgress } from '@material-ui/core';
import { Container, Col, Row } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';

function RatingsBar({
  ratings, totalRatings, thisValue, sortStarRatings,
}) {
  const [clicked, setClicked] = useState(true);
  const percentageRatings = (ratings / totalRatings) * 100;
  const [css, setCss] = useState("raw-rating-button")

  const handleClick = () => {
    //this will toggle the css to be used

    clicked ? setCss("raw-clicked-rating-button") : setCss("raw-rating-button");
    setClicked(!clicked);
    console.log('clicked', clicked);
  };

  return (
    <Container style={{width: "100%"}}>

      <Row>

        <span className="raw-ratings-first-column">
          <button className={css} color="primary" type="button" value={thisValue} onClick={() => { sortStarRatings(thisValue); handleClick(); }}>
            {thisValue}
            {' '}
            star
            {' '}
          </button>
        </span>
        <span>
          <progress className="raw-progressBar" max="100" value={percentageRatings} />
        </span>

      </Row>
    </Container>
  );
}

export default RatingsBar;
