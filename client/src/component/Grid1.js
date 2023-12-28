import React from 'react';
import { AppBar, Toolbar, Typography  } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Predict from './Predict';
import ViewCorrespondence from './ViewCorrespondence'
import AddButton from './AddButton'
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'
import SearchBar from './SearchBar'
import { pxToRem, pxToVw, pxToVh } from '../utils/theme';
import Tables from './Table'
import TableData from './TableData'

const useStyles = makeStyles((theme) => ({
  // root: {
  //   flexGrow: 1,
  //   display: "flex",
  // },
  "@global": {
    // MUI typography elements use REMs, so you can scale the global
    // font size by setting the font-size on the <html> element.
    html: {
      fontSize: "calc(0.75vh + 0.75vw)",
     
    }
  },
  paper: {
    // padding: theme.spacing(0),
    // textAlign: 'center',
    // // color: theme.palette.text.secondary,
    // background: "#273D49CC 0% 0% no-repeat padding-box",
      // margin: pxToRem(theme.spacing(2)),
      // width: pxToVw(theme.spacing(170)),
      // height: pxToVh(theme.spacing(61)),
      // background: "#273D49CC 0% 0% no-repeat padding-box",
      // borderRadius: "10px",
      // opacity: "1",
      display:'flex',
        
        width: pxToRem(1960),
        height: pxToRem(799),
        margin: pxToRem(30) ,
        background: "#273D49CC 0% 0% no-repeat padding-box",
        borderRadius: "10px",
        opacity: "1",
    },
    title: {
        // padding: pxToRem(theme.spacing(2)),
        // display:'flex',
        // marginRight: theme.spacing(0),
        // marginBotton: theme.spacing(0),
        // color: 'white',
        // font: "Ubuntu",
        marginLeft:theme.spacing(4),
    marginTop: pxToRem(20),
    marginLeft: pxToRem(30),
    width: pxToRem(255),
    height: pxToRem(31),
    textAlign:"left",
    font: "normal normal normal pxToRem(38)/ pxToRem(32) Ubuntu",
    letterSpacing: pxToRem(0),
    color: '#FFFFFF',
    },
    
  }));

export default function Grid1() {
  const classes = useStyles();

  return (
        <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid direction="column"
  justify="center"
  alignItems="stretch" item xs={12}>
          {/* <Paper className={classes.paper}>xs=12</Paper> */}
                  {/* <AppBar>Invoice List</AppBar> */}
                
                  <Typography className={classes.title}
                       variant="h6"
                component="div">Invoice List</Typography>
        </Grid>
        {/* <Grid item xs={12}> */}
              <Paper className={classes.paper}>
                 <Predict />
                  <ViewCorrespondence />
                  <AddButton />
                  <EditButton />
          <DeleteButton />
            <SearchBar />
          {/* <Tables/>  */}
          {/* < TableData/> */}
          </Paper>
        {/* </Grid> */}
      </Grid>
    </div>
  );
}