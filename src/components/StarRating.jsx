import React, { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

function StarRating({ ratings }) {
  if(!ratings.ratings) {
    return <div />;
  }
 console.log(ratings)
  const totalStars = Object.values(ratings.ratings).reduce((p, v) => p + v);
  console.log('total stars', totalStars);
  const numberOfReviews = Object.keys(ratings.ratings).length;
  const averageStarRating = totalStars / numberOfReviews;
  console.log(averageStarRating);

  return (

    <Box component="fieldset" mb={1} borderColor="transparent">
      <Rating name="read-only" value={averageStarRating} precision={0.25} readOnly />
    </Box>

  );
}

export default StarRating;
