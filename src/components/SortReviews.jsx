import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function SortReviews({
  getNewestReviews, getRelevantReviews, getHelpfulReviews, ratings
}) {

  const totalStars = Object.values(ratings.ratings).reduce((p, v) => p + v);


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



  const [sortedBy, setSortedBy] = useState('relevance');

  const handleChange = (event) => {
    setSortedBy(event.target.value);
    if (sortedBy === 'newest') {
      getNewestReviews();
    }

    if (sortedBy === 'relevance') {
      getRelevantReviews();
    }

    if (sortedBy === 'helpfulness') {
      getHelpfulReviews();
    }
  };

  return (

    <FormControl className={classes.formControl}>
      <InputLabel>{totalStars} reviews,  Sorted By</InputLabel>
      <Select
        value={sortedBy}
        onChange={handleChange}
      >
        <MenuItem value="relevance">Relevance</MenuItem>
        <MenuItem value="helpfulness">Helpfulness</MenuItem>
        <MenuItem value="newest">Newest</MenuItem>
      </Select>
    </FormControl>

  );
}

export default SortReviews;
