import React, {useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function SortReviews(props) {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const [sortedBy, setSortedBy] = useState('relevance');
  const classes = useStyles();

  const handleChange = (event) => {
    console.log('hello');
    setSortedBy(event.target.value);
  };
  return (

    <FormControl className={classes.formControl}>
      <InputLabel>Sorted By</InputLabel>
      <Select
      value={sortedBy}
        onChange={handleChange}
      >
        <MenuItem value={'relevance'}>Relevance</MenuItem>
        <MenuItem value={'helpfulness'}>Helpfulness</MenuItem>
        <MenuItem value={'newest'}>Newest</MenuItem>
      </Select>
    </FormControl>

  );
}

export default SortReviews;
