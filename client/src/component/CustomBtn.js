import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { pxToRem,pxToVh,pxToVw } from '../utils/theme';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  "@global": {
    // MUI typography elements use REMs, so you can scale the global
    // font size by setting the font-size on the <html> element.
    html: {
      fontSize: "calc(0.75vh + 0.75vw)",
     
    }
  },


  
   

  predict:{
    marginTop: pxToVh(30),
    width: pxToRem(106),
    height: pxToVh(45),
    marginLeft: pxToVh(30),
    background: '#97A1A9 0% 0% no-repeat padding-box',
     borderRadius: '10px',
     color:'white',
    opacity: 1,
    textTransform:'none',
    '&:hover': {
      backgroundColor: '#5daae0',
      color: 'white',
  }
},

viewCor:{
  marginTop: pxToVh(30),
    width: pxToVw(237),
    height: pxToVh(45),
    marginLeft: pxToVw(18),
    border: '1px solid #97A1A9',
    borderRadius: '10px',
    color:'white',
    opacity: 1,
    textTransform:'none',
},

dltbutton:{
  marginTop: pxToVh(30),
  marginLeft: pxToVw(18),
  width: pxToVw(99),
  height: pxToVh(45),
  border: "1px solid #97A1A9",
  borderRadius: "10px",
  opacity: 1,
  textTransform:'none',
  color:'white'
},


editbutton:{
 marginTop: pxToVh(30),
  marginLeft: pxToVw(18),
  width: pxToVw(102),
  height: pxToVh(45),
  border: "1px solid #97A1A9",
  borderRadius: "10px",
  opacity: 1,
  textTransform:'none',
  color:'white'
},

addbutton:{
  marginTop: pxToVh(30),
  marginLeft: pxToRem(503),
  [theme.breakpoints.up("sm")]: {
    marginLeft: pxToRem(50),
  },
  [theme.breakpoints.up("md")]: {
    marginLeft: pxToRem(50),
  },

  [theme.breakpoints.up("lg")]: {
    marginLeft: pxToRem(503),
  },
  width: pxToVw(95),
  height: pxToVh(45),
  border: "1px solid #14AFF1",
  borderRadius: "10px",
  opacity: 1,
  textTransform:'none',
  color:'white'
},

}));


const CustomBtn = (props) => {
    const classes = useStyles();
/*     const [color] = useState(props.color);
  const [variant] = useState(props.variant); */
  const [className1] = useState(props.propsclass)
  let statusClass = classes[className1];
  const className2 = `classes.${props.propsclass}`
  //const [startIcon]=useState(props.startIcon);
  const startIcon = props.startIcon;
  console.log(className2)
  //console.log(className)
  console.log(startIcon)
  
   
    return (
       /*  <Button  className={`classes.${className}`} onClick={props.propsFunc} variant={`${variant}`} color={`${color}`} >{props.propsName}</Button> */
       <Button className={`${classes.root} ${statusClass}`} 
       startIcon={startIcon} >{props.propsName}</Button>


    );
  };
  
  export default CustomBtn;