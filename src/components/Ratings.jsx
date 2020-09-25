import React from 'react';

function Ratings(props) {
  var one = props.ratings.ratings['1'];
  var two = props.ratings.ratings['2'];
  var three = props.ratings.ratings['3'];
  return (
    <div>
      <h2>Star Average per product</h2>
      <div>
        <ul>
          <li>1 star ratings: {one}</li>
          <li>2s star ratings {two}</li>
          <li>2 star ratings {three}</li>
        </ul>
      </div>
      <div>Size and Comfort</div>
    </div>
  );
}

export default Ratings;
