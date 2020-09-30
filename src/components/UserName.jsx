import React from 'react';

function UserName({ review }) {



  const date = review.date.substring(0, 10);
  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
    var monthNumber = parseInt(date.slice(5,7));
    console.log(monthNumber);
    var day = date.slice(8,10);
    var year = date.slice(0, 4);
    var monthWord = month[monthNumber];

    var listedDate = `${monthWord} ${day}, ${year}`
    console.log(listedDate);




  console.log(typeof(date));
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
