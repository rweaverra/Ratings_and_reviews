import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import Review from './Review.jsx';
import Ratings from './Ratings.jsx';
import FormModal from './FormModal.jsx';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


function ReviewList({productId}) {

  const [reviews, setReviews] = useState([]);
  const [count, setCount] = useState(2)
  const [sortedBy, setSortedBy] = useState('helpful');
  // const totalStars = Object.values(ratings.ratings).reduce((p, v) => p + v);
  const [starReviews, setStarReviews] = useState([]);


  function loadMoreReviews() {
    setCount(count + 2);
  }

  const changeSortingType = (event) => {
    console.log('insidehandle change');
    var searchType = event.target.value;
    setSortedBy(searchType);
      console.log(sortedBy);

  }




  function sortStarRatings(event) {
   console.log('current rating inside sort star ratings', typeof(event.target.value));
   var currentStar = parseInt(event.target.value);
    var result = reviews.filter((rating) => {
      return rating['rating'] === currentStar;
   }
     );

     setReviews(result);

     console.log('result of sortStarRating', result);
  }


//function to reorganize the reviews array by star rating and then setReviews??

  useEffect(() => {
    axios.get(`http://52.26.193.201:3000/reviews/${productId}/list?sort=${sortedBy}&count=${count}`)
    .then((response) => {
      var results = response.data.results
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
      <Col xs={6}>
      <Ratings
            productId={productId}
            sortStarRatings={sortStarRatings}
          />
         </Col>

      <Col xs={6}>

        <h2>Reviews</h2>


      <FormControl className={classes.formControl}>
      <InputLabel>#### reviews,  Sorted By</InputLabel>
      <Select
        onChange={changeSortingType}
        value={sortedBy}
      >
        <MenuItem value="relevant">Relevance</MenuItem>
        <MenuItem value="helpful">Helpfulness</MenuItem>
        <MenuItem value="newest">Newest</MenuItem>
      </Select>
    </FormControl>

      {reviews.map((review, i) =>
      <Review key={`${i}review`}
        review={review} />)}


        <button onClick={loadMoreReviews}>More Reviews Button</button>
        {' '}
        ||
        <button onClick={handleShow}>Add a review</button>


      <FormModal show={show} onHide={handleClose}  />
      </Col>
      </Row>
    </Container>
  );
}

export default ReviewList;
