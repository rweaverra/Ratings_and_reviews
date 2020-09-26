import React, { useState } from 'react';

function Ratings({ ratings }) {
  const [individualRatings, setIndividualRatings] = useState(ratings.ratings);


  return (
    <div>
      <h2>Star Average per product</h2>
      <div>
        <ul>
          <li>
            1 star ratings:
            {individualRatings['1']}
          </li>
          <li>
            2 star ratings
            {individualRatings['2']}
          </li>
          <li>
            3 star ratings
            {individualRatings['3']}
          </li>
          <li>
            4 star ratings
            {individualRatings['4']}
          </li>
          <li>
            5 star ratings
            {individualRatings['5']}
          </li>
        </ul>
      </div>
      <div>Size and Comfort</div>
    </div>
  );
}

export default Ratings;
