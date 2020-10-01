import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import Review from './Review.jsx';
import FormModal from './FormModal.jsx';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function ReviewList({ratings, productId}) {

  const [reviews, setReviews] = useState([]);
  const [displayedReviews, setDisplayedReviews] = useState([]);
  const [count, setCount] = useState(2)
  const [sortedBy, setSortedBy] = useState('helpful');
  const totalStars = Object.values(ratings.ratings).reduce((p, v) => p + v);


  function loadMoreReviews() {
    setCount(count + 2);
  }

  const changeSortingType = (event) => {
    console.log('insidehandle change');
    var searchType = event.target.value;
    setSortedBy(searchType);
      console.log(sortedBy);

  }


  function deleteReview(id) {
    const review = id.target.name;
    console.log(review);
    axios({
      method: 'put',
      url: `http://52.26.193.201:3000/reviews/report/${review}`,
    })
      .then((response) => {
        getNewestReviews();
        console.log(response);
      });
  }

  useEffect(() => {
    axios.get(`http://52.26.193.201:3000/reviews/${productId}/list?sort=${sortedBy}&count=${count}`)
    .then((response) => {
      var results = response.data.results
      console.log(results);
      setReviews(response.data.results);
    });

  }, [count, sortedBy]);


//SORTING STYLING========== can probably figure out a way to put into css
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();




  // Modal===========
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  function handleShow() { setShow(true); }


  if(reviews.length === 0) {
    return <div></div>
  }

  return (
    <Container>
      <Row>
        <h2>Reviews</h2>
      </Row>
      <Row>
      <FormControl className={classes.formControl}>
      <InputLabel>{totalStars} reviews,  Sorted By</InputLabel>
      <Select
        onChange={changeSortingType}
        value={sortedBy}
      >
        <MenuItem value="relevant">Relevance</MenuItem>
        <MenuItem value="helpful">Helpfulness</MenuItem>
        <MenuItem value="newest">Newest</MenuItem>
      </Select>
    </FormControl>
      </Row>
      {reviews.map((review, i) =>
      <Review key={`${i}review`}
        review={review}
        deleteReview={deleteReview}
        ratings={ratings} />)}
      <Row />
      <Row>
        <button onClick={loadMoreReviews}>More Reviews Button</button>
        {' '}
        ||
        <button onClick={handleShow}>Add a review</button>

      </Row>
      <FormModal show={show} onHide={handleClose}  />
    </Container>
  );
}

export default ReviewList;
