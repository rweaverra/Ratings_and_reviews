import React, { useState, useEffect} from 'react';
import { Container, Col, Row, Button  } from 'react-bootstrap';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormModal from './FormModal.jsx';
import Ratings from './Ratings.jsx';
import Review from './Review.jsx';

function ReviewList({ productId }) {
  const [reviews, setReviews] = useState([]);
  const [count, setCount] = useState(2);
  const [sortedBy, setSortedBy] = useState('helpful');
  const [starReviews, setStarReviews] = useState([]);
  const [displayedReviews, setDisplayedReviews] = useState([]);
  const [helpfulness, setHelpfulness] = useState('');
  const [filterApplied, setFilterApplied] = useState([]);

  function loadMoreReviews() {
    setCount(count + 2);

  }

  const changeSortingType = (event) => {
    console.log('insidehandle change');
    const searchType = event.target.value;
    setSortedBy(searchType);
    console.log(sortedBy);
  };

  function sortStarRatings(event) {

    console.log('result of sortStarRating', reviews);
    const currentStar = parseInt(event.target.value);
    const result = reviews.filter((rating) => rating.rating === currentStar);

    console.log('result', result);

    if(filterApplied.length > 0) {
      console.log('insided of itttttt')
      var sliced = [];

      filterApplied.map((rating, i) => {
      //if the number matches, then we will undo it
      if(rating === currentStar){
        console.log('this will be the function to undo it');
        //remove from filterApplied
        sliced = filterApplied.slice(i, i + 1)
        console.log('sliced', sliced);
        return setFilterApplied(sliced);
      }
    })
     if(sliced.length < 1) {
      setFilterApplied([...filterApplied, currentStar]);
      return  setDisplayedReviews(displayedReviews.concat(result));
     }
      // setFilterApplied([currentStar]);
      // console.log('filter applied', filterApplied)
      // return (result.length > 0 ? setDisplayedReviews(result) : null);


    // return (result.length > 0 ? setDisplayedReviews([...displayedReviews, result]) : <div>hello</div>);

  } else {
    setFilterApplied([currentStar]);
    return (result.length > 0 ? setDisplayedReviews(result) : null);
  }

  };



  useEffect(() => {
    axios.get(`http://52.26.193.201:3000/reviews/${productId}/list?sort=${sortedBy}&count=30`)
      .then((response) => {
        const { results } = response.data;
        setReviews(response.data.results)
         var displayed = results.slice(0, count);
         setDisplayedReviews(displayed);
      });




  }, [count, sortedBy]);

  // SORTING STYLING========== can probably figure out a way to put into css
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,


    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },

    inputLabel: {
      color: "green",
    },

  }));
  const classes = useStyles();

  // Modal===========
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  function handleShow() { setShow(true); }


  if (displayedReviews.length === 0) {
    return <div />;
  }

  return (
    <Container>

      <Row>
        <Col sm={1}/>
        <Col sm={5}>
          <Ratings
            productId={productId}
            sortStarRatings={sortStarRatings}

          />
        </Col>

        <Col sm={6}>

          <h2>Reviews</h2>
          <Row className="align-items-center raw-review-row">

           {reviews.length} reviews,  Sorted By

          <FormControl className={classes.formControl}>
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
          {displayedReviews.map((review, i) => (
            <Review
              key={`${i}review`}
              review={review}
            />
          ))}
        <Row>
          <button
            className="raw-review-buttons"
          onClick={loadMoreReviews}>MORE REVIEWS</button>
          {' '}

          <button className="raw-review-buttons" onClick={handleShow}>ADD A REVIEW</button>
          </Row>
          <FormModal show={show} onHide={handleClose} />
        </Col>
        <Col sm={1}/>
      </Row>
    </Container>
  );
}

export default ReviewList;
