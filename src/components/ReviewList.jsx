import React, { useState, useEffect} from 'react';
import { Container, Col, Row, Button  } from 'react-bootstrap';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormModal from './FormModal.jsx';
import Ratings from './Ratings.jsx';
import Review from './Review.jsx';

function ReviewList({ productId }) {
  const [reviews, setReviews] = useState([]);
  const [count, setCount] = useState(2);
  const [sortedBy, setSortedBy] = useState('helpful');
  // const totalStars = Object.values(ratings.ratings).reduce((p, v) => p + v);
  const [starReviews, setStarReviews] = useState([]);

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
    console.log('current rating inside sort star ratings', event.target.value);
    const currentStar = parseInt(event.target.value);
    const result = reviews.filter((rating) => rating.rating === currentStar);

    return (result.length > 0 ? setReviews(result) : null);

    console.log('result of sortStarRating', result);
  }

  // function to reorganize the reviews array by star rating and then setReviews??

  useEffect(() => {
    axios.get(`http://52.26.193.201:3000/reviews/${productId}/list?sort=${sortedBy}&count=${count}`)
      .then((response) => {
        const { results } = response.data;
        setReviews(response.data.results);
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
  }));
  const classes = useStyles();

  // Modal===========
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  function handleShow() { setShow(true); }

  if (reviews.length === 0) {
    return <div />;
  }

  return (
    <Container>

      <Row>
        <Col sm={6}>
          <Ratings
            productId={productId}
            sortStarRatings={sortStarRatings}
          />
        </Col>

        <Col sm={6}>

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

          {reviews.map((review, i) => (
            <Review
              key={`${i}review`}
              review={review}
            />
          ))}

          <Button
          variant="jgd-sharp-edge"
          size="lg" onClick={loadMoreReviews}>More Reviews Button</Button>
          {' '}
          ||
          <button onClick={handleShow}>Add a review</button>

          <FormModal show={show} onHide={handleClose} />
        </Col>
      </Row>
    </Container>
  );
}

export default ReviewList;
