import React, { useEffect } from 'react';
import {
  Form, FormCheck, FormFile, Button,
} from 'react-bootstrap';
import axios from 'axios';

function FormInputs(props) {

  function submitForm(event) {
    event.preventDefault();
    props.onHide();
    axios({
      method: 'post',
      url: 'http://52.26.193.201:3000/reviews/1',
      data: {
        rating: 5,
        summary: "SOO GOOD",
        Body: "feels like a cloud",
        reccomend: true,
        name: "Big Bird",
        email: "big@bird.com",
        characteristics {
          "14": 5,
          "16": 5
        }
      }
    })

 };



  return (

    <div>
      <Form onSubmit={submitForm} >

        <Form.Group controlId="formChooseRatings">
          <Form.Label>Rate the product</Form.Label>
          <Form.Control as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="summary">
          <Form.Label>Summary/Review Title</Form.Label>
          <Form.Control as="textarea" rows="1" />
        </Form.Group>

        <Form.Group controlId="body">
          <Form.Label>Review Body</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>

        <Form.Group controlId="reccomend">
          <Form.Label>Do you reccomend this Product?</Form.Label>
          <Form.Check
            type="radio"
            label="true"
            name="reccomend"
            id="reccomendTrue"
          />
          <Form.Check
            type="radio"
            label="false"
            name="reccomend"
            id="reccomendFalse"
          />

        </Form.Group>

        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.File
            id="Reviewfile added"
            label="Upload photo"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Characteristics</Form.Label>
          <Form.Group>
            <Form.Label>Size</Form.Label>
          <Form.Control as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Comfort</Form.Label>
          <Form.Control as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
          </Form.Group>

        </Form.Group>

        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default FormInputs;
