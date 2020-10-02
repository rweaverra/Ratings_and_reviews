import React, { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import StarRating from './StarRating.jsx'

function Ratings({productId, sortStarRatings}) {
  const [ratings, setRatings] = useState({});
  const number = 'this string is to trigger the average inside of StarRating Component';

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
      <StarRating ratings={ratings} number={number}/>
      <div>
        <ul>
          <li>
            <button onClick={sortStarRatings} value='1'>1 star ratings:</button>
            {ratings.ratings['1']}
          </li>
          <li>
          <button onClick={sortStarRatings} value='2'>2 star ratings:</button>
            {ratings.ratings['2']}
          </li>
          <li>
          <button onClick={sortStarRatings} value='3'>3 star ratings:</button>
            {ratings.ratings['3']}
          </li>
          <li>
          <button onClick={sortStarRatings} value='4'>4 star ratings:</button>
            {ratings.ratings['4']}
          </li>
          <li>
          <button onClick={sortStarRatings} value='5'>5 star ratings:</button>
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
