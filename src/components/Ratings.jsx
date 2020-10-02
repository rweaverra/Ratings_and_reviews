import React, { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import { Container, Col, Row } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
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
  console.log('ratings Characteristics: ', ratings);
  return (
    <Container>
      <h2>Ratings</h2>
      <StarRating ratings={ratings} number={number} />
        <Row>
          <Recommend recommend={ratings.recommended}/>
        </Row>
      <Row>

        <button onClick={sortStarRatings} value="1">1 star ratings:</button>
        {ratings.ratings['1']}
        {' '}
        <RatingsBar ratings={ratings.ratings['1']} totalRatings={totalRatings} />

      </Row>
      <Row>
        <button onClick={sortStarRatings} value="2">2 star ratings:</button>
        {ratings.ratings['2']}
        {' '}
        <RatingsBar ratings={ratings.ratings['2']} totalRatings={totalRatings} />
      </Row>
      <Row>
        <button onClick={sortStarRatings} value="3">3 star ratings:</button>
        {ratings.ratings['3']}
        {' '}
        <RatingsBar ratings={ratings.ratings['3']} totalRatings={totalRatings} />
      </Row>
      <Row>
        <button onClick={sortStarRatings} value="4">4 star ratings:</button>
        {ratings.ratings['4']}
        {' '}
        <RatingsBar ratings={ratings.ratings['4']} totalRatings={totalRatings} />
      </Row>
      <Row>

        <button onClick={sortStarRatings} value="5">5 star ratings:</button>
        {ratings.ratings['5']}
        {' '}
        <RatingsBar ratings={ratings.ratings['5']} totalRatings={totalRatings} />

      </Row>
      <Row />

      <Row>
        Fit 1-5:
        {ratings.characteristics.Fit.value}

      </Row>
      <Row>
      <CharacteristicSlider value={ratings.characteristics.Fit.value}/>
      </Row>
      <Row>
        Comfort:
        {ratings.characteristics.Comfort.value}
      </Row>
      <Row>
      <CharacteristicSlider value={ratings.characteristics.Comfort.value}/>
      </Row>
    </Container>

  );
}

export default Ratings;
