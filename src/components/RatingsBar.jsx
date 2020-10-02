import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { LinearProgress } from '@material-ui/core';

function RatingsBar({ ratings, totalRatings }) {
  const percentageRatings = (ratings / totalRatings) * 100;

  return (

    <div className="raw-progressbar">

      <LinearProgress variant="determinate" value={percentageRatings} />
    </div>

  );
}

export default RatingsBar;
