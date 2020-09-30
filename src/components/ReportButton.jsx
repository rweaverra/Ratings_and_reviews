import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function ReportButton(props) {
  const [id] = useState(props.review.review_id);



  return (
    <div>
      <button name={id} onClick={props.deleteReview}>Report</button>
    </div>

  );
}

export default ReportButton;
