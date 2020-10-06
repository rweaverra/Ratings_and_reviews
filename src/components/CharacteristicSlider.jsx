import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

function CharacteristicSlider({ value, characteristic }) {
  const valueTotal = parseInt(value) * 20;

  if (!characteristic) {
    return <div />;
  }

  return (
    <Container >
      <h5>{characteristic}</h5>
      <Row>
        <div className="slidecontainer">
          <input type="range" min="1" max="100" value={valueTotal} className="slider" id="myRange" readOnly />
        </div>
      </Row>
      <Row className="raw-justify-end">
        <Col>
         {characteristic === "Fit" || characteristic === "Length" ? "small" : "poor"}
        </Col>
        <Col>
         {characteristic === "Fit" || characteristic === "Length" ? "large" : "superb"}
        </Col>

      </Row>
    </Container>

  );
}

export default CharacteristicSlider;
