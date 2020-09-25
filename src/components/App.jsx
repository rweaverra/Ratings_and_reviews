import React, { useState, useEffect } from 'react';
import Ratings from './Ratings.jsx';
import ReviewList from './ReviewList.jsx';
import {exampleReview, exampleRating} from './exampleReview.js';
import axios from 'axios';





function App(props) {

  const [reviews, setReviews] = useState([]);


  useEffect(() => {
    axios.get('http://52.26.193.201:3000/reviews/1/list')
  .then(response => {
    setReviews(response.data.results);
  }
)
  }, []);



 return (
    <div className="container">
      <div>
        <Ratings ratings={exampleRating}/>
      </div>
      <div>
        <ReviewList example={reviews}/>
      </div>
      <div>{console.log('reviews/state:', reviews)}</div>
    </div>
  )
}

export default App;

