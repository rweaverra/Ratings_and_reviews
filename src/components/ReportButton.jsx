import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function ReportButton(props) {
  console.log(props.review);
  function deleteReview(event) {
    console.log('delete');
    axios({
      method: 'put',
      url: `http://52.26.193.201:3000/reviews/report/${props.review.review_id}`
    })
    .then((response) => {
      console.log('deleted', response)
       props.deleteReview(props.review.review_id);
      props.getReviews();
    })

    //need to change state to rerender
  }

  return (
    <div>
      <button onClick={deleteReview}>Report</button>
    </div>

  );
}

export default ReportButton;
