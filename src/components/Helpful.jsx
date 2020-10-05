import React, {useState} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

function Helpful({ review }) {
  const [helpful, setHelpful] = useState(false);
  const [totalHelp, setTotalHelp] = useState(review.helpfulness);

  function addHelpful(event) {
    setHelpful(!helpful);
    axios({
      method: 'put',
      url: `http://52.26.193.201:3000/reviews/helpful/${review.review_id}`,
    })
      .then((response) => {
        setTotalHelp(totalHelp + 1);
        console.log(response);
      })

  }

  return (
    <div>
      <Button color="primary" type="button" disabled={helpful} onClick={addHelpful}>Helpful {review.helpfulness} </Button>
    </div>

  );
}

export default Helpful;



