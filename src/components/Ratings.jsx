import React, { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import { Container, Col, Row } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from '@material-ui/core/Button';
import StarRating from './StarRating.jsx';
import RatingsBar from './RatingsBar.jsx';
import Recommend from './Recommend.jsx';
import CharacteristicSlider from './CharacteristicSlider.jsx';

function Ratings({ productId, sortStarRatings }) {
  const [ratings, setRatings] = useState({});
  const number = 'this string is to trigger the average inside of StarRating Component';

  if (ratings.ratings) {
    var totalRatings = Object.values(ratings.ratings).reduce((p, v) => p + v);
  }

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
      <StarRating ratings={ratings} number={number} />
      <Row>
        <Recommend recommend={ratings.recommended} />
        {' '}

      </Row>
      <Row className="raw-star-row">
        {Object.entries(ratings.ratings).map(([key, value], i) => <RatingsBar thisValue={key} ratings={value} totalRatings={totalRatings} key={i + value} sortStarRatings={sortStarRatings}/>)}
      </Row>
      <Row className="raw-star-row">
      {Object.entries(ratings.characteristics).map(([key, value], i) => <CharacteristicSlider characteristic={key} value={value.value} key={i + value} />)}
      </Row>
    </Container>

  );
}

export default Ratings;
