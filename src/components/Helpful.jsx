import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

function Helpful({ review, helpfulnessArray, handleHelpfulnessArray }) {
  const totalHelp = review.helpfulness;
  const plusOneHelp = review.helpfulness + 1;
 const helpful = false;


  function addHelpful(event) {
    // setHelpful(!helpful);
    axios({
      method: 'put',
      url: `http://52.26.193.201:3000/reviews/helpful/${review.review_id}`,
    })
      .then((response) => {
        console.log(response);
      });
  }


  // checking to see if helpful button has been clicked
  const helpfulCheck = helpfulnessArray.filter((productId) => productId === review.review_id);

  console.log('helpful Check', helpfulCheck);

  if (helpfulCheck.length > 0) {
    helpful = true;
  }
  console.log('inside helpful', helpfulnessArray);
  return (
    <div>
      <Button color="primary" type="button" value={review.helpfulness} disabled={helpful} onClick={() => { addHelpful(); handleHelpfulnessArray(review.review_id);}}>
        Helpful
        {totalHelp}
      </Button>
    </div>

  );
}

export default Helpful;
