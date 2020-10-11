import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

function Helpful({ review, helpfulnessArray, handleHelpfulnessArray }) {
var clicked = false;
var amount = review.helpfulness;

function addHelpful(event) {
    axios({
      method: 'put',
      url: `http://52.26.193.201:3000/reviews/helpful/${review.review_id}`,
    })
      .then((response) => {
        console.log(response);
      });
  }

  console.log("helpfulnessArray", helpfulnessArray);
   const helpfulClicked = helpfulnessArray.filter((productId) => productId === review.review_id);
   //if current product id equals helpfulness array then disable helpful button
    console.log('helpfulClicked', helpfulClicked);
    if(helpfulClicked.length > 0) {
      console.log('this helpful button has been clicked');
      clicked = true;
      amount = amount + 1;
    }

  return (
    <div>
      <Button color="primary" type="button" value={amount} disabled={clicked} onClick={() => { addHelpful(); handleHelpfulnessArray(review.review_id); }}>
        Helpful
        {review.helpfulness}
      </Button>
    </div>

  );
}

export default Helpful;
