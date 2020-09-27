import React, {useState} from 'react';
import Review from './Review.jsx';

function ReviewList(props) {
const first = props.reviews[0];
const second = props.reviews[1];

  const [reviewList, setReviewList] = useState(props.reviews);
  const [displayedReviews, setDisplayedReviews] = useState([first, second]);
  const [counter, setCounter] = useState(2);

  console.log('reviewList', reviewList);
  function addReviews() {
    //grab the next two reviews from reviews list- slice
     var nextReviews = reviewList.slice(counter, counter + 2);
     console.log(nextReviews);
     var combineReviews = displayedReviews.concat(nextReviews);
     setDisplayedReviews(combineReviews);
     setCounter(counter + 2);
    //add two additional reviews to displayed reviews- push
    //add to counter by 2 so that I know the next two to grab.
  };

  const listReviews = displayedReviews.map((review, i) =>
    <Review key={i + 'review'} review={review} />);


  return (
    <div>
      <h2>Reviews</h2>
      Show total reviews sorted by "relevace, newest, etc"
      <div>
        {listReviews}
      </div>
      <button onClick={addReviews}>More Reviews Button</button> || <button>Add a review</button>
    </div>
  );
}

export default ReviewList;
