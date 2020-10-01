import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

function Helpful(props) {
  // const [helpful, setHelpful] = useState(false);
  // const [totalHelp, setTotalHelp] = useState(props.review.helpfulness)

  // function addHelpful(event) {
  //   setHelpful(!helpful);
  //   axios({
  //     method: 'put',
  //     url: `http://52.26.193.201:3000/reviews/helpful/${props.review.review_id}`,
  //   })
  //     .then((response) => {
  //       setTotalHelp(totalHelp + 1);
  //       console.log(response);
  //     })

  // }

  return (
    <div>
      <Button color="primary" type="button" >Helpful {props.review.helpfulness} </Button>
    </div>

  );
}

export default Helpful;



