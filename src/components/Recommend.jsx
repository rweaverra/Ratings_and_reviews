import React from 'react';

function Recommend({ recommend }) {

  const total = Object.values(recommend).reduce((p, v) => p + v);
  const percentage = Math.round((recommend['1'] / total) * 100);


  return (
    <div>
      {percentage}
      % of reviews recommend this product
    </div>
  );
}

export default Recommend;
