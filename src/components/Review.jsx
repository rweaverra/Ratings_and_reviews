import React from 'react';
import Helpful from './Helpful.jsx';
import ReportButton from './ReportButton.jsx';

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
      <div> <Helpful review={props.review} getReviews={props.getReviews}/>      <ReportButton  review={props.review} getReviews={props.getReviews} deleteReview={props.deleteReview}/>

       </div>
    </div>
  );
}

export default Review;
