
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { pxToRem, pxToVw, pxToVh } from '../utils/theme';
import Icon from '@material-ui/core/Icon';
//import search from '../assets/search-24px (3).svg';

const useStyles = makeStyles((theme) => ({
  "@global": {
    // MUI typography elements use REMs, so you can scale the global
    // font size by setting the font-size on the <html> element.
    html: {
      fontSize: "calc(0.75vh + 0.75vw)",
     
    }
  },
    searchbar: {
      //margin: pxToRem(theme.spacing(1)),
      //width: '25ch',
      marginTop: pxToVh(30),
      marginLeft: pxToVw(20),
      marginRight:pxToVw(20),
      width: pxToVw(360),
      height: pxToVh(45),
      background: "#283A46 0% 0% no-repeat padding-box ",
      border: "1px solid #356680",
      borderRadius: "10px",
      opacity: "1",
      textTransformation: "none",
      textAlign: "center",
      color:'#97A1A9',
      font: "normal normal normal pxToRem(18)/pxToRem(21) Ubuntu",
    },
  
}));

export default function SearchBar2() {
  const classes = useStyles();

  return (

    <TextField className={classes.root, classes.searchbar} label="Search by Invoice Number" size="small" variant="outlined"
      
      InputProps={{
        endAdornment: (<InputAdornment>
          <IconButton>
          <SearchIcon/>
          </IconButton>
          </InputAdornment>)
          }}
      />
          );
          }