import React, { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import StarRating from './StarRating.jsx'

function Ratings({productId, sortStarRatings}) {
  const [ratings, setRatings] = useState({});

  function getRatings() {
    axios.get(`http://52.26.193.201:3000/reviews/${productId}/meta`)
      .then((response) => {
        setRatings(response.data);
      });
  }


  useEffect(() => {
    getRatings();
  }, []);



  if (!ratings.ratings) {
    return <div />;
  }
console.log(ratings.ratings)
  return (
    <div>
      <h2>Ratings</h2>
      <StarRating ratings={ratings}/>
      <div>
        <ul>
          <li>
            <button>1 star ratings:</button>
            {ratings.ratings['1']}
          </li>
          <li>
            2 star ratings
            {ratings.ratings['2']}
          </li>
          <li>
            3 star ratings
            {ratings.ratings['3']}
          </li>
          <li>
            4 star ratings
            {ratings.ratings['4']}
          </li>
          <li>
            5 star ratings
            {ratings.ratings['5']}
          </li>
        </ul>
      </div>
      <div>
        Size 1-5:
        {ratings.characteristics.Fit.value}
      </div>
      <div>
        Comfort:
        {ratings.characteristics.Comfort.value}
      </div>
    </div>
  );
}

export default Ratings;
