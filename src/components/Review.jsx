import React from 'react';

function Review(props) {
  console.log('inside Review', props.review);
  return (
    <div>
      <div>{props.review.rating}</div>
      <h3>{props.review.summary}</h3>
      <div>{props.review.body}</div>
      <div>helpful button  || report button</div>
    </div>
  );
}

export default Review;
