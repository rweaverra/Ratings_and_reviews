import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

function CharacteristicSlider({ value, characteristic }) {
  const valueTotal = parseInt(value) * 20;

  if (!characteristic) {
    return <div />;
  }

  return (
    <Container>
      <Row>
      <h5 className="raw-characteristc-title">{characteristic}</h5>
      </Row>
      <Row>
        <div className="slidecontainer">
          <input type="range" min="1" max="100" value={valueTotal} className="slider" id="myRange" readOnly />
        </div>
      </Row>
      <Row >
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
