import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


const useStyles = makeStyles({
  root: {
    width: 200,
  },
});



function CharacteristicSlider({ value }) {
  const classes = useStyles();
   const valueTotal = parseInt(value) * 20;



  return (
    <div className={classes.root}>
         <Slider disabled defaultValue={valueTotal} aria-labelledby="disabled-slider" />
    </div>
  );
}

export default CharacteristicSlider;