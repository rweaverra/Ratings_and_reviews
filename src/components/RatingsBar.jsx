import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { LinearProgress } from '@material-ui/core';



function RatingsBar({ratings, totalRatings}) {



  var percentageRatings = (ratings/totalRatings) * 100;

  console.log('inside ratings bar', percentageRatings);
  return (

  <div className='raw-progressbar'>

    <LinearProgress variant="determinate" value={percentageRatings} />
    </div>


  )
}

export default RatingsBar;