import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { pxToRem, pxToVw, pxToVh } from '../utils/theme';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  predict: {
    top: pxToRem(8),
    left: pxToRem(25),
    width: pxToVw(70),
    height: pxToVh(37),
    background: "#14AFF1 0% 0% no-repeat padding-box",
    // background: '#97A1A9 0% 0% no-repeat padding-box',
    borderRadius: "10px",
    opacity: " 1",
    textTransform: "none",
    // '&:hover': {
    //   backgroundColor: '#5daae0',
    //   color: 'white',
    // }
  },

}));

export default function Predict() {
    const classes = useStyles();
  return (
    <Button className={classes.root, classes.predict} variant="contained" color="primary" disableElevation >
      Predict
    </Button>
  );
}