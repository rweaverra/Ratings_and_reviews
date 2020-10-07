import React, {useState} from 'react';
import { LinearProgress } from '@material-ui/core';
import { Container, Col, Row } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';


function RatingsBar({
  ratings, totalRatings, thisValue, sortStarRatings,
}) {

  const [clicked, setClicked] = useState(false);
  const percentageRatings = (ratings / totalRatings) * 100;


  function handleClick(event) {
    console.log('clicked');
  }

  return (
    <Container>

      <Row >

        <span className="raw-ratings-first-column">
          <button className="raw-rating-button" color="primary" type="button" value={thisValue} onClick={() => {sortStarRatings(thisValue); handleClick();}} >{thisValue} star </button>
          </span>
       <span>
       <progress className="raw-progressBar"  max="100" value={percentageRatings}></progress>
          </span>

      </Row>
    </Container>
  );
}

export default RatingsBar;
