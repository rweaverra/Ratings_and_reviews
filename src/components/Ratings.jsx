import React, { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';

function Ratings({ ratings }) {
  const [testRatings, setRatings] = useState({});

  useEffect(() => {
    axios.get('http://52.26.193.201:3000/reviews/4/meta')
    .then(res => {
      console.log(res.data)
      setRatings(res.data.ratings);
    });
  }, []);

   console.log('inside Ratings testRatings:', testRatings);

  return (
    <div>
      <h2>Ratings</h2>
      <div>
        <ul>
          <li>
            1 star ratings:
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
