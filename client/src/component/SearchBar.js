import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { pxToRem, pxToVw, pxToVh } from '../utils/theme';
import Icon from '@material-ui/core/Icon';
import search_24px_3 from '../assets/search.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
    searchbar: {
     margin: pxToRem(theme.spacing(1)),
      width: '25ch',
      top: pxToRem(1),
      left: pxToRem(690),
      width: pxToVw(270),
      height: pxToVh(37),
      background: "#283A46 0% 0% no-repeat padding-box ",
      border: "1px solid #356680",
      borderRadius: "10px",
      opacity: "1",
      textTransformation: "none",
      textAlign: "center",
      color:'white',
    },
  
}));

export default function SearchBar() {
  const classes = useStyles();

  return (
    // <form className={classes.seacrchbar} noValidate autoComplete="off">
      // <TextField className={classes.searchbar} id="filled-secondary" label="Search by Invoice Number" variant="filled" >
      //   <IconButton >
      //   <SearchIcon />
      // </IconButton>
      //   {/* <img src={search_24px_3} alt="search_24px_3" /> */}
      //   </TextField >
    // </form>
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

          // import React from 'react';
          // import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// // import IconButton from '@material-ui/core/IconButton';
// // import Input from '@material-ui/core/Input';
// // import FilledInput from '@material-ui/core/FilledInput';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// //import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// //import TextField from '@material-ui/core/TextField';
// import search_24px_3 from '../assets/search_24px_3.svg';
// import {pxToRem} from '../utils/theme'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   margin: {
//     margin: theme.spacing(0),
//   },
//   withoutLabel: {
//     marginTop: theme.spacing(3),
//   },
//   textField: {
//     width: '25ch',
//     top: pxToRem(0),
//      left: "950px",
//     width: "270px",
//     height: "45px",
//  background:" #283A46 0% 0% no-repeat padding-box",
// border: "1px solid #356680",
// borderRadius: "10px",
// opacity: "1",
//   },
// }));

// export default function SearchBar() {
//   const classes = useStyles();
//   const [values, setValues] = React.useState({
//     // amount: '',
//     // password: '',
//     // weight: '',
//     // weightRange: '',
//     // showPassword: false,
//   });

//   const handleChange = (prop) => (event) => {
//     setValues({ ...values, [prop]: event.target.value });
//   };
//   return (
    
      
//         <FormControl className={clsx(classes.margin, classes.textField, classes.root)} variant="filled">
//           <InputLabel color="white">Serach By Invoice Number</InputLabel>
//           <OutlinedInput
//             id="outlined-adornment-weight"
//             value={values.weight}
//             onChange={handleChange('weight')}
//             endAdornment={<InputAdornment position="end">
//               <img src={search_24px_3} alt="search_24px_3" />
//             </InputAdornment>}
//             // aria-describedby="outlined-weight-helper-text"
//             // inputProps={{
//             //   'aria-label': 'weight',
//             // }}
//             labelWidth={0}
//           />
//           {/* <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText> */}
//         </FormControl>
        
        
      
    
//   );
// }