// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { withStyles } from "@material-ui/core/styles";
// import Button from '@material-ui/core/Button';
// import AddIcon from '@material-ui/icons/Add';
// //import Path_18189 from '../assets/Path_18298.svg';
// //import AddIcon from '@material-ui/icons/Add';
// import { pxToRem, pxToVw, pxToVh } from '../utils/theme';
// //import AddDialogue from './AddM'
// import Dialog from "@material-ui/core/Dialog";
// import MuiDialogTitle from "@material-ui/core/DialogTitle";
// import MuiDialogContent from "@material-ui/core/DialogContent";
// import MuiDialogActions from "@material-ui/core/DialogActions";
// import IconButton from "@material-ui/core/IconButton";
// import CloseIcon from "@material-ui/icons/Close";
// import Typography from "@material-ui/core/Typography";
// import TextField from "@material-ui/core/TextField";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexGrow: 1,
//     margin: 0,
//     padding: theme.spacing(2),
//     backgroundColor: "#2A3E4C",
//     color: "white"
//   },
//     addbutton: {
//         top: pxToRem(10),
//         left: pxToRem(655),
//         width: pxToVw(90),
//         height: pxToVh(37),
//         border: "1px solid #14AFF1",
//         borderRadius: "10px",
//         opacity: "1",
//         textAlign: "left",
//         color: " #FFFFFF",
//         font: "Ubuntu",
//         textTransform: "none",
//   },
//     closeButton: {
//     position: "absolute",
//     right: theme.spacing(1),
//     top: theme.spacing(1),
//     color: theme.palette.grey[500]
//   },
// }));

// const DialogTitle = withStyles()((props) => {
//   const { children, classes, onClose, ...other } = props;
//   return (
//     <MuiDialogTitle disableTypography className={classes.root} {...other}>
//       <Typography variant="h6">{children}</Typography>
//       {onClose ? (
//         <IconButton
//           aria-label="close"
//           className={classes.closeButton}
//           onClick={onClose}
//         >
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </MuiDialogTitle>
//   );
// });

// const DialogContent = withStyles((theme) => ({
//   root: {
//     padding: theme.spacing(2),
//     backgroundColor: "#2A3E4C"
//   }
// }))(MuiDialogContent);

// const DialogActions = withStyles((theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(1),
//     backgroundColor: "#2A3E4C"
//   }
// }))(MuiDialogActions);

// export default function AddButton() {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);
//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };
//   return (
//      <div>
//       <Button className={classes.root, classes.addbutton} variant="outlined" color="primary" disableElevation startIcon={<AddIcon />} onClick={handleClickOpen}>
//           {/* <img src={Path_18189} alt="Path_18189" /> */}
//      Add
//     </Button>
//       <Dialog
//         onClose={handleClose}
//         aria-labelledby="customized-dialog-title"
//         open={open}
//       >
//         <DialogTitle id="customized-dialog-title" onClose={handleClose}>
//           Add Invoice
//         </DialogTitle>
//         <DialogContent dividers>
//           <div>
//             <span>Customer Name*</span>
//             <TextField
//               id="outlined-secondary"
//               //label="Outlined secondary"
//               variant="outlined"
//               color="primary"
//             />
//             <span>Customer Number*</span>
//             <TextField
//               id="outlined-secondary"
//               //label="Outlined secondary"
//               variant="outlined"
//               color="primary"
//             />
//             <span>Invoice Number*</span>
//             <TextField
//               id="outlined-secondary"
//               //label="Outlined secondary"
//               variant="outlined"
//               color="primary"
//             />
//             <span>Invoice Amount*</span>
//             <TextField
//               id="outlined-secondary"
//               //label="Outlined secondary"
//               variant="outlined"
//               color="primary"
//             />

//             <span>Due Date*</span>
//             <form  noValidate>
//       <TextField
//         id="date"
//         variant="outlined"
//               color="primary"
//         type="date"
        
//         //className={classes.textField}
//         InputLabelProps={{
//           shrink: true,
//         }}
//       />
//     </form>
//             <span>Notes</span>
//             <TextField
//               id="outlined-multiline-static"
//               multiline
//               rows={4}
//               variant="outlined"
//               color="primary"
//             />
//           </div>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Cancel
//           </Button>
//           <Button
//             autoFocus
//             onClick={handleClose}
//             text-align="left"
//             font="normal normal normal 20px/24px Ubuntu"
//             letter-spacing="0px"
//             color="#FFFFFF"
//             opacity="1"
//           >
//             Clear
//           </Button>
//           <Button
//             autoFocus
//             onClick={handleClose}
//             color="primary"
//             variant="contained"
//             font="normal normal normal 20px/24px Ubuntu"
//             letter-spacing="0px"
//             opacity="1"
//             backgroundColor="#14AFF1"
//           >
//             Add
//           </Button>
//         </DialogActions>
//       </Dialog>
//      </div>
//   );
// }
import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
//import Path_18189 from '../assets/Path_18189.svg';
import { pxToRem, pxToVw, pxToVh } from '../utils/theme';
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
//import AddDialogue from './AddDialogue'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
    addbutton: {
      top: pxToRem(10),
              left: pxToRem(655),
              width: pxToVw(90),
              height: pxToVh(37),
              border: "1px solid #14AFF1",
              borderRadius: "10px",
              opacity: "1",
              textAlign: "left",
              color: " #FFFFFF",
              font: "Ubuntu",
              textTransform: "none",
  },
    spanEdit:{
          color:"#FF5E5E"
  },
    buttonClearColor:{
            color:"white",
            backgroundColor:"transparent",
            border: "1px solid #14AFF1"
  },
    buttonAddColor:{
            color:"white",
            backgroundColor:"#14AFF1"
  },
    buttonCancelColor:{
            color:"#14AFF1",
           // backgroundColor:"#14AFF1"
      right: pxToRem(560),
  },
    styledText: {
      width: '25ch',
      width: pxToVw(180),
      height: pxToVh(37),
      background: "#283A46 0% 0% no-repeat padding-box ",
      border: "1px solid #356680",
      borderRadius: "5px",
      opacity: "1",
      textTransformation: "none",
      textAlign: "center",
      color:'white',
    },
    
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    backgroundColor:"#2A3F4D",
    color:'white',
    display: "flex",
     flexGrow: 1,
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(0),
    backgroundColor: "#2A3E4C",
    color: "white"
  }
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    backgroundColor: "#2A3E4C"
  }
}))(MuiDialogActions);

export default function AddButton() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
     <div>
      <Button onClick={handleClickOpen} className={classes.root, classes.addbutton} variant="outlined" color="primary" disableElevation startIcon={<AddIcon />} >
          {/* <img src={Path_18189} alt="Path_18189" /> */}
     Add
    </Button>
      <Dialog
       
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      > 
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add Invoice
        </DialogTitle>
        <DialogContent dividers>
          <Grid> &nbsp; &nbsp;
            <span>Customer Name<span className={classes.spanEdit}>*</span>
            </span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
            <TextField
              id="outlined-secondary"
              //label="Outlined secondary"
              //variant="outlined"
              //color="primary"
              className={classes.styledText}
              
            />
            </span>
            

            <span> &nbsp;&nbsp; Due Date<span className={classes.spanEdit}>*</span>
            {/* <form  noValidate> */}
            </span>
            <span>&nbsp;&nbsp;
      <TextField
        id="date"
        //variant="outlined"
              //color="primary"
        type="date"
        className={classes.styledText}
        //className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
            {/* </form> */}
          </span>
          </Grid>

          &nbsp; &nbsp;
          <Grid>
            <span> &nbsp;&nbsp; Customer Number<span className={classes.spanEdit}>*</span></span>

            <span>  &nbsp;&nbsp;
            
            <TextField
              id="outlined-secondary"
              //label="Outlined secondary"
              // variant="outlined"
              // color="primary"
              className={classes.styledText}
            />

            <span>  &nbsp; &nbsp; Notes</span>
           <span> &nbsp;
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={4}
              variant="outlined"
              color="primary"
              //className={classes.styledText}
            />
            </span>
            </span>
          </Grid>
          <Grid>
            <span>  &nbsp;&nbsp; Invoice Number<span className={classes.spanEdit}>*</span>
            </span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              id="outlined-secondary"
              //label="Outlined secondary"
              // variant="outlined"
              // color="primary"
              className={classes.styledText}
            />
            </span>
          </Grid>
          &nbsp; &nbsp;
          <Grid>
            <span>  &nbsp;&nbsp; Invoice Amount<span className={classes.spanEdit}>*</span>
            </span> 
            <span> &nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              id="outlined-secondary"
              //label="Outlined secondary"
              // variant="outlined"
              // color="primary"
              className={classes.styledText}
            />
            </span>
          </Grid>
          {/* <Grid>
            <span>Due Date<span className={classes.spanEdit}>*</span></span>
            <form  noValidate>
      <TextField
        id="date"
        variant="outlined"
              color="primary"
        type="date"
        
        //className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
            </form>
          </Grid> */}
          {/* <Grid>
            <span>Notes</span>
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={4}
              variant="outlined"
              color="primary"
            />
          </Grid> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className={classes.buttonCancelColor} >
            Cancel
          </Button>
          <Button
            autoFocus
            onClick={handleClose}
            text-align="left"
            // font="normal normal normal 20px/24px Ubuntu"
            // letter-spacing="0px"
            // color="#FFFFFF"
            // opacity="1"
            className={classes.buttonClearColor}
          >
            Clear
          </Button>
          <Button
            autoFocus
            onClick={handleClose}
            color="primary"
            variant="contained"
            font="normal normal normal 20px/24px Ubuntu"
            letter-spacing="0px"
            opacity="1"
            //backgroundColor="#14AFF1"
            className={classes.buttonAddColor}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
     </div>
  );
}