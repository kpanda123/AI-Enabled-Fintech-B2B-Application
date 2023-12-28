import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { pxToRem, pxToVw, pxToVh } from '../utils/theme';

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
    viewcorrespondence: {
      // top: pxToRem(10),
      // left: pxToRem(35),
      // width: pxToVw(170),
      // height: pxToVh(37),
      // border: "1px solid #14AFF1",
      // borderRadius: "10px",
      // opacity: "1",
      // textAlign: "left",
      // color: " #FFFFFF",
      // font: "Ubuntu",
      // textTransform: "none",
    top: pxToRem(10),
    width: pxToVw(237),
    height: pxToVh(37),
    marginLeft: pxToRem(35),
    border: '1px solid #97A1A9',
    borderRadius: '10px',
    color:'white',
    opacity: 1,
    textTransform:'none',
    },
}));

export default function ViewCorrespondence() {
    const classes = useStyles();
  return (
    <Button className={classes.root, classes.viewcorrespondence} variant="outlined" color="primary" disableElevation >
      View Correspondence
    </Button>
  );
}