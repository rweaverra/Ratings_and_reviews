import React from 'react';
import Helpful from './Helpful.jsx';

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
      <div> <Helpful review={props.review}/>   || report button</div>
    </div>
  );
}

export default Review;
