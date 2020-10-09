import React, {useState} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

function Helpful({ review }) {
  const [helpful, setHelpful] = useState(false);
  const totalHelp = review.helpfulness;
  const plusOneHelp = review.helpfulness + 1;

  function addHelpful(event) {
    setHelpful(!helpful);
    axios({
      method: 'put',
      url: `http://52.26.193.201:3000/reviews/helpful/${review.review_id}`,
    })
      .then((response) => {
        console.log(response);
      })

  }

  return (
    <div>
      <Button color="primary" type="button" disabled={helpful} onClick={addHelpful}>Helpful {helpful ? plusOneHelp : totalHelp} </Button>
    </div>

  );
}

export default Helpful;


