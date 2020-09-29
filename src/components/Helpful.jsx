import React, { useState } from 'react';
import axios from 'axios';

function Helpful(props) {
  const [helpful, setHelpful] = useState(false);

  console.log(props.review);
  function addHelpful(event) {
    setHelpful(!helpful);
    axios({
      method: 'put',
      url: `http://52.26.193.201:3000/reviews/helpful/${props.review.review_id}`,
    })
      .then((response) => {
        props.getReviews();
        console.log(response);
      });
  }

  return (
    <div>
      <button type="button" disabled={helpful} onClick={addHelpful}>Helpful {props.review.helpfulness} </button>
    </div>

  );
}

export default Helpful;
