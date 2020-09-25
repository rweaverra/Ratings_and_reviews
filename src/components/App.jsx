import React, { useState } from 'react';
import Ratings from './Ratings.jsx';
import ReviewList from './ReviewList.jsx';
import exampleReview from './exampleReview.js';


function App(props) {
  return (
    <div className="container">
      <div>
        <Ratings />
      </div>
      <div>
        {console.log(exampleReview)}
        <ReviewList />
      </div>
    </div>
  )
}

export default App;

