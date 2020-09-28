import React from 'react';

function Review(props) {
  if (!props.review) {
    return <div />;
  }
  return (
    <div>
      <h3>{props.review.summary}</h3>
      <div>
        rating:
        {props.review.rating}
      </div>
      <div>
        Summary:
        {props.review.body}
      </div>
      <div>helpful button  || report button</div>
    </div>
  );
}

export default Review;
