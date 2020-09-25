import React from 'react';
import Review from './Review.jsx';

function ReviewList() {
  return (
    <div>
      Show total reviews sorted by "relevace, newest, etc"
      <div>
        <Review />
      </div>
      More Reviews Button || Add a review button
    </div>
  );
}

export default ReviewList;
