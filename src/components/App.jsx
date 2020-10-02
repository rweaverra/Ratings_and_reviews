/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Ratings from './Ratings.jsx';
import ReviewList from './ReviewList.jsx';
import { exampleReview, exampleRating } from './exampleReview.js';

const productId = 1;

function App() {






  return (
    <Container>
      <Row>
        <Col sm={1} />
        <Col sm={4}>

        </Col>
        <Col sm={6}>
          <ReviewList
            productId={productId}
          />
        </Col>
        <Col sm={1} />
      </Row>
    </Container>
  );
}

export default App;
