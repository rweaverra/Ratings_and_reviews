import React, { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

function StarRating({ ratings }) {
  if (!ratings.ratings) {
    return <div />;
  }



  //Weighted Average Function
  const allRatings = ratings.ratings;
  var weightedTotal = function () {
   let sum = 0;
    for (let key in allRatings) {
      var numberedKey = parseInt(key);
      sum += (numberedKey * allRatings[key]);
    }
    return sum;
  };

  const totalStars = Object.values(ratings.ratings).reduce((p, v) => p + v);
  const averageStarRating = weightedTotal() / totalStars;


  return (

    <Box component="fieldset" mb={1} borderColor="transparent">
      <Rating name="read-only" value={averageStarRating} precision={0.25} readOnly />
    </Box>

  );
}

export default StarRating;
