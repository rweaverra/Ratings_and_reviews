import React, { useState, useEffect } from 'react';



function Ratings(props) {


console.log('inside ratings', props.ratings['1']);

  return (
    <div>
      <h2>Star Average per product</h2>
      <div>
        <ul>
          <li>1 star ratings: {props.ratings['1']}  </li>
          <li>2 star ratings {props.ratings['2']} </li>
          <li>3 star ratings {props.ratings['3']}</li>
          <li>4 star ratings {props.ratings['4']}</li>
          <li>5 star ratings {props.ratings['5']}</li>
        </ul>
      </div>
      <div>Size and Comfort</div>
    </div>
  );
}

export default Ratings;
