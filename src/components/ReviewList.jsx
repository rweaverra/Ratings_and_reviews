import React, {useState} from 'react';
import Review from './Review.jsx';
import {Modal, ModalDialog, ModalHeader, ModalTitle, ModalBody, ModalFooter, Button } from 'react-bootstrap';


function ReviewList(props) {
const first = props.reviews[0];
const second = props.reviews[1];

  const [reviewList, setReviewList] = useState(props.reviews);
  const [displayedReviews, setDisplayedReviews] = useState([first, second]);
  const [counter, setCounter] = useState(2);

  function addReviews() {
     var nextReviews = reviewList.slice(counter, counter + 2);
     console.log(nextReviews);
     var combineReviews = displayedReviews.concat(nextReviews);
     setDisplayedReviews(combineReviews);
     setCounter(counter + 2);
  };

       //Modal===========
       const [show, setShow] = useState(false);
       const handleClose = () => setShow(false);
       function handleShow() {setShow(true)};

  const listReviews = displayedReviews.map((review, i) =>
    <Review key={i + 'review'} review={review} />);


  return (
    <div>
      <h2>Reviews</h2>
      Show total reviews sorted by "relevace, newest, etc"
      <div>
        {listReviews}
      </div>
      <button onClick={addReviews}>More Reviews Button</button> || <button onClick={handleShow}>Add a review</button>
      <div>

      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add A Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>What do you think of this product?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>



    </div>
  );
}

export default ReviewList;
