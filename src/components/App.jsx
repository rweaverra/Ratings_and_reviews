import React, { useState } from 'react';
import Ratings from './Ratings.jsx';
import ReviewList from './ReviewList.jsx';
import {exampleReview, exampleRating} from './exampleReview.js';


function App(props) {
  return (
    <div className="container">
      <div>
        <Ratings ratings={exampleRating}/>
      </div>
      <div>
        <ReviewList example={exampleReview}/>
      </div>
    </div>
  )
}

export default App;

