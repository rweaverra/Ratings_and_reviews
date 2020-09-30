import React from 'react';

function UserName({ review }) {
  const date = review.date.substring(0, 10);
  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
  const monthNumber = parseInt(date.slice(5, 7));
  const day = date.slice(8, 10);
  const year = date.slice(0, 4);
  const monthWord = month[monthNumber];

  const listedDate = `${monthWord} ${day}, ${year}`;

  return (
    <div>
      {review.reviewer_name}
      ,
      {' '}
      {listedDate}
    </div>

  );
}

export default UserName;
