
import React from 'react';
import { AppBar, Toolbar, Typography  } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { pxToRem, pxToVh, pxToVw } from '../utils/theme';
import TableData from './TableData'
import Button from '@material-ui/core/Button';
//import Buttong from './Buttong.js';

import CustomBtn from './CustomBtn';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
//import InvoiceTable from './InvoiceTable';

import SearchBar2 from './SearchBar2';


const useStyles = makeStyles((theme) => ({
  "@global": {
    // MUI typography elements use REMs, so you can scale the global
    // font size by setting the font-size on the <html> element.
    html: {
      fontSize: "calc(0.75vh + 0.75vw)",
     
    }
  },
  paper: { 
        display:'flex',
        
        width: pxToRem(1960),
        height: pxToRem(799),
        margin: pxToRem(30) ,
        background: "#273D49CC 0% 0% no-repeat padding-box",
        borderRadius: "10px",
        opacity: "1",
  },
    title: {
        
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

export default function Invoicegrid() {
  const classes = useStyles();

  return (
        <div className={classes.root}>
          <Grid container spacing={0}>
            <Grid direction="column" 
              justify="center"
              alignItems="stretch" item xs={12}>
            <Typography className={classes.title}
                variant= "h5"
                component="div">Invoice List</Typography>
            </Grid>
          {/* <Grid item xs={12}> */}
              <Paper  variant="outlined" className={classes.paper}>
              
              <CustomBtn propsName="Predict" propsclass='predict'></CustomBtn>
              <CustomBtn propsName="View Correspondance" propsclass='viewCor'></CustomBtn>
              <CustomBtn propsName="Add" propsclass='addbutton' startIcon={<AddIcon />} ></CustomBtn>
              <CustomBtn propsName="Edit" propsclass='editbutton' startIcon={<EditIcon />}></CustomBtn>
              <CustomBtn propsName="Delete" propsclass='dltbutton' startIcon={<RemoveIcon />}></CustomBtn>
            
               <SearchBar2 />
               < TableData/>
              {/* <CustomButtom  propsName="Predict" className={classes.pred}></CustomButtom>
              <CustomButtom  propsName="View Correspondence " className={classes.pred}></CustomButtom> */}
              {/* <div className={classes.pageSide}>  */}
              {/* <CustomButtom  propsName="Add " className={classes.pred}></CustomButtom>
              <CustomButtom  propsName="Edit " className={classes.pred}></CustomButtom>
              <CustomButtom  propsName="Delete " className={classes.pred}></CustomButtom> */}
              {/* </div> className={classes.pred}*/}
              {/* <CustomButtom  propsName="Predict" variant="contained" color="secondary"
              ></CustomButtom>
              <CustomButtom  propsName="View Correspondence" variant="contained" color="secondary"
              width={pxToVw(237)}  height= {pxToRem(45)}></CustomButtom> */}
             
              {/* <PredictBtn />
              <VcBtn />
              <AddBtn />
               <EditBtn />
               <DltBtn /> */}
               {/* <section> */}
               {/* <InvoiceTable /></section> */}
              
              </Paper > 
              
              
          {/* </Grid> */}
      </Grid>
    </div>
  );
}