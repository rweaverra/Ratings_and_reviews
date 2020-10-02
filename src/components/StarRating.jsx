import React, { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

function StarRating({ ratings, number }) {
  if (!ratings.ratings) {
    return <div />;
  }



  //Weighted Average Function
  const allRatings = ratings.ratings;
  var weightedTotal = function () {
   let sum = 0;
    for (let key in allRatings) {
      var numberedKey = parseInt(key);
      sum += (numberedKey * allRatings[key]);
    }
    return sum;
  };

  const totalStars = Object.values(ratings.ratings).reduce((p, v) => p + v);
  const averageStarRating = weightedTotal() / totalStars;
  const rounded = Math.round(averageStarRating * 10) / 10;

if(number) {
  return (

  <Container>
    <Row xs={2} md={4} lg={6}>
      <Col>
      <h2>{rounded}</h2>
      </Col>
      <Col>
    <Box component="fieldset" mb={1} borderColor="transparent">
    <Rating name="read-only" value={averageStarRating} precision={0.25} readOnly />
  </Box>
  </Col>
  </Row>
  </Container>

    )
}

  return (

    <Box component="fieldset" mb={1} borderColor="transparent">
      <Rating name="read-only" value={averageStarRating} precision={0.25} readOnly />
    </Box>

  );
}

export default StarRating;
