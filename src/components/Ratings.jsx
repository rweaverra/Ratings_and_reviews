import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import StarRating from './StarRating.jsx';
import RatingsBar from './RatingsBar.jsx';
import Recommend from './Recommend.jsx';
import CharacteristicSlider from './CharacteristicSlider.jsx';

function Ratings({ productId, sortStarRatings, resetReviews, filterApplied}) {
  const [ratings, setRatings] = useState({});
  const [reset, setReset] = useState(false);
  // const [display, setDisplay] = useState('raw-display');
  const number = 'this string is to trigger the average inside of StarRating Component';
  const display = 'raw-display';

  if (ratings.ratings) {
    var totalRatings = Object.values(ratings.ratings).reduce((p, v) => p + v);
  }

  //NEED TO UPDATE THIS TO MAKE THE RESET BUTTON APPEAR, TRIED SETING DISPLAY BUT GOT CAUGHT WITH AN INFINITE LOOP OF RERENDERS
  // if(filterApplied.length> 0){
  //   console.log('a filter has been applied')
  //   display = 'raw-review-buttons';

  // }

  const resetRatings = () => {
    setReset(!reset);
  };

  function getRatings() {
    axios.get(`http://52.26.193.201:3000/reviews/${productId}/meta`)
      .then((response) => {
        setRatings(response.data);
      });
  }

  useEffect(() => {
    getRatings();
  }, []);

  if (!ratings.ratings) {
    return <div />;
  }

  return (
    <Container className="raw-ratings">
      <h2>Ratings</h2>
      <Row>
        <StarRating ratings={ratings} number={number} />
      </Row>

      <Row>
        <Recommend recommend={ratings.recommended} />
        {' '}
      </Row>
      <Row className="raw-star-row">
        {Object.entries(ratings.ratings).map(([key, value]) => (
          <RatingsBar
            thisValue={key}
            ratings={value}
            totalRatings={totalRatings}
            key={uuidv4()}
            sortStarRatings={sortStarRatings}
            resetRatings={resetRatings}
            reset={reset}

          />
        ))}
      </Row>
      <Row className="raw-star-row">
        {Object.entries(ratings.characteristics).map(([key, value]) => (
          <CharacteristicSlider
            characteristic={key}
            value={value.value}
            key={uuidv4()}
          />
        ))}
      </Row>
      <Row>
        <button className={display} onClick={resetReviews} type="button">RESET SEARCH</button>
      </Row>
    </Container>

  );
}

export default Ratings;
