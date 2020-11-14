import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300
  }
});

function valuetext(value) {
  return `${value} spaces`;
}

export default function RangeSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 5]);

  const handleChange = (_, newValue) => {
    setValue(newValue);
    return value !== newValue ? props.updateFilter(newValue) : null;
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Filtering by Room
      </Typography>
      <Slider
        value={value}
        onChangeCommitted={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        min={props.min}
        max={props.max}
      />
    </div>
  );
}