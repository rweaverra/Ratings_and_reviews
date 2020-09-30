import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

function ReportButton(props) {
  const [id] = useState(props.review.review_id);



  return (
    <div>
      <Button name={id} onClick={props.deleteReview}>Report</Button>
    </div>

  );
}

export default ReportButton;
