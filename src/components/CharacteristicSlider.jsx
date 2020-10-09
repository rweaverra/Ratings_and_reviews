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
        <div className="raw-slidecontainer">
          <input type="range" min="1" max="100" value={valueTotal} className="slider" id="myRange" readOnly />
        </div>
      </Row>
      <Row className="raw-characteristics">

         <div>{characteristic === "Fit" || characteristic === "Length" ? "small" : "poor"}</div>


         <div>{characteristic === "Fit" || characteristic === "Length" ? "large" : "superb"}</div>


      </Row>
    </Container>

  );
}

export default CharacteristicSlider;
