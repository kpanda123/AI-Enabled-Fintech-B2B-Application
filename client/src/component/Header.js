import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import React from "react";
//import './Header.css';
//import theme from '../utils/theme';
import logo from '../assets/logo.svg';
import Group__20399 from '../assets/MainLogo.png';


// const useStyles = makeStyles(() => ({
//     header: {
//         display: "flex",
//         // marginTop: "auto",
//         // marginLeft: "auto",
//         // marginRight: "auto",
//         // marginBottom: "auto",
//         // left: "0rem",
//         // top:"0rem",
//         width: "100vw",
//         height: "100vh",
//         background: "transparent radial-gradient(closest-side at 50% 50%, #58687e 0%, #39495e 100%) 0% 0% no-repeat padding-box",
//         opacity: "1",
//     },
//     logoABC: {
//         marginTop: "0.3rem",
//         marginLeft: "1.5rem",
//         height: "2.45rem",
//         width: "auto",
//         background: "transparent 0% 0% no-repeat padding-box",
//         opacity: "1",
//     },
//     logoHRC: {
//         display: "block",
//         marginTop: "0.3rem",
//         marginLeft: "27%",
//         height: "2.5rem",
//         background: "transparent 0% 0% no-repeat padding-box",
//         opacity: 1,
//     },

// }));


const useStyles = makeStyles(() => ({
    root:{
    fontsize: "calc(0.75vh + 0.75vw)",
      
        // width:"100vw",
        // height:"100vh",
      },
    
header: {
    display: "flex",
    marginTop: "0.5vh",
    left: "0px",
  height: "10vh",
  
},
logoABC: {
    marginleft: "1.5vw",
    marginTop:" 0.3vh ",
    marginBottom:" 0.3vh ",
    height: "5vh",
    width: "auto",
    background: "0% 0% no-repeat padding-box",
    opacity: 1,
},
logoHRC: {
    display: "block",
    marginTop: "0.3vh",
    marginLeft: "25vw",
    marginRight:"25vw",
    height: "5vh",
    background: "transparent 0% 0% no-repeat padding-box",
    opacity: 1,
},

}));

 function Header() {

    const { header, logoABC, logoHRC } = useStyles();

  return (
     <header>
          <AppBar elevation={0} position="static"  className={header}>
        <Toolbar >
        <img src={Group__20399} className={logoABC} alt="Group__20399" />
        <img src={logo} className={logoHRC} alt="logo" />
          </Toolbar>
          </AppBar>
    </header>
  );

}

export default Header