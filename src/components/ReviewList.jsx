import React from 'react';
import Review from './Review.jsx';

function ReviewList(props) {
  {console.log(props.example)}
  const listReviews = props.example.results.map((review, i) =>
    <Review key={i + 'review'} review={review} />);
  return (
    <div>
      Show total reviews sorted by "relevace, newest, etc"
      <div>

        {listReviews}
      </div>
      More Reviews Button || Add a review button
    </div>
  );
}

export default ReviewList;
