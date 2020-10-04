import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

function CharacteristicSlider({ value }) {
  const valueTotal = parseInt(value) * 20;

  return (
    <Container>
      <Row>
        <div className="slidecontainer">
          <input type="range" min="1" max="100" value={valueTotal} className="slider" id="myRange" readOnly />
        </div>
      </Row>
      <Row>
        <Col>
          small
        </Col>
        <Col >
        <div className="raw-justify-end"> large</div>

        </Col>

      </Row>
    </Container>

  );
}

export default CharacteristicSlider;
