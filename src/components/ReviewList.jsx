import React from 'react';
import Review from './Review.jsx';

function ReviewList(props) {

  const listReviews = props.example.map((review, i) =>
    <Review key={i + 'review'} review={review} />);
  return (
    <div>
      <h2>Reviews</h2>
      Show total reviews sorted by "relevace, newest, etc"
      <div>
        {listReviews}
      </div>
      <button>More Reviews Button</button> || <button>Add a review</button>
    </div>
  );
}

export default ReviewList;
