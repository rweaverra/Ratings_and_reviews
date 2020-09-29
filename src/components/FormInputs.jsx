import React, { useEffect, useReducer } from 'react';
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
        summary: 'SOO GOOD',
        body: 'feels like a cloud',
        recommend: true,
        name: 'Big Bird',
        email: 'big@bird.com',
        characteristics: {
          14: 5,
          16: 5,
        },
      },
    })
      .then((response) => {
        console.log(response.data);
      });
  }

  // handle multiple inputs
  const [state, setState] = React.useState({
    rating: 0,
    summary: '',
    body: '',
    recommend: '',
    name: '',
    email: ''

  });

  function handleChange(event) {
    const { value } = event.target;
    setState({
      ...state,
      [event.target.name]: value,
    });
    console.log(state);
  }

  return (

    <div>
      <Form onSubmit={submitForm}>

        <Form.Group controlId="formChooseRatings">
          <Form.Label>Rate the product</Form.Label>
          <Form.Control as="select" name="rating" value={state.rating} onChange={handleChange}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="summary">
          <Form.Label>Summary/Review Title</Form.Label>
          <Form.Control as="textarea" rows="1" name="summary" value={state.summary} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="body">
          <Form.Label>Review Body</Form.Label>
          <Form.Control as="textarea" rows="3" name="body" value={state.body} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="reccomend">
          <Form.Label>Do you reccomend this Product?</Form.Label>
          <Form.Check
            type="radio"
            label="true"
            name="recommend"
            id="recommendTrue"
            value="true"
            checked={state.recommend === true}
            onChange={handleChange}
          />
          <Form.Check
            type="radio"
            label="false"
            name="recommend"
            id="recommendFalse"
            value="false"
            checked={state.recommend === false}
            onChange={handleChange}
          />

        </Form.Group>

        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={state.name} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" value={state.email} onChange={handleChange} />
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

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default FormInputs;
