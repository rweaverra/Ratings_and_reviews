import React, { useState, useEffect } from 'react';
import Ratings from './Ratings.jsx';
import ReviewList from './ReviewList.jsx';
import {exampleReview, exampleRating} from './exampleReview.js';
import axios from 'axios';





function App(props) {

  const [reviews, setReviews] = useState([]);
  const [ratings, setRatings] = useState(exampleRating);

  useEffect(() => {
    axios.get('http://52.26.193.201:3000/reviews/1/list')
  .then(response => {
    setReviews(response.data.results);
  }
)
  axios.get('http://52.26.193.201:3000/reviews/1/meta')
    .then(response => {
      setRatings(response.data);
    })
  }, []);




 return (
    <div className="container">
      <div>
        <Ratings ratings={ratings}/>
        {console.log('ratings', ratings)}
      </div>
      <div>
        <ReviewList example={reviews}/>s
        {console.log('reviews', reviews)}
      </div>
      <div></div>
    </div>
  )
}

export default App;

