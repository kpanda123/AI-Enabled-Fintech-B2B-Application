// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import EditIcon from '@material-ui/icons/Edit';
// //import Path_18191 from '../assets/Path_18191.svg';
// import { pxToRem, pxToVw, pxToVh } from '../utils/theme';

// const useStyles = makeStyles(() => ({
//   root: {
//     display: "flex",
//     flexGrow: 1,
//   },
//     editbutton: {
//         top: pxToRem(10),
//         left: pxToRem(672),
//         width: pxToVw(85),
//         height: pxToVh(37),
//         border: "1px solid #97A1A9",
//         borderRadius: "10px",
//         opacity: "1",
//         textAlign: "left",
//         color: " #FFFFFF",
//       font: "Ubuntu",
//       fontColor: "#97A1A9",
//       textTransform: "none",
//     },
// }));

// export default function EditButton() {
//     const classes = useStyles();
//   return (
//       <Button className={classes.root, classes.editbutton} variant="outlined" color="primary" disableElevation startIcon={<EditIcon />}>
//           {/* <img src={Path_18191} alt="Path_18191" /> */}
//       Edit
//     </Button>
//   );
// }
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import EditIcon from '@material-ui/icons/Edit';
// import Path_18191 from '../assets/Path_18191.svg';
// import { pxToRem, pxToVw, pxToVh } from '../utils/theme';

// const useStyles = makeStyles(() => ({
//   root: {
//     display: "flex",
//     flexGrow: 1,
//   },
//     editbutton: {
//         top: pxToRem(-164),
//         left: pxToRem(1220),
//         width: pxToVw(85),
//         height: pxToVh(37),
//         border: "1px solid #97A1A9",
//         borderRadius: "10px",
//         opacity: "1",
//         textAlign: "left",
//         color: " #FFFFFF",
//       font: "Ubuntu",
//       fontColor: "#97A1A9",
//       textTransform: "none",
//     },
// }));

// export default function EditButton() {
//     const classes = useStyles();
//   return (
//     <div>
//       <Button className={classes.root, classes.editbutton} variant="outlined" color="primary" disableElevation startIcon={<EditIcon />}>
//           {/* <img src={Path_18191} alt="Path_18191" /> */}
//       Edit
//     </Button>
//     </div>
//   );
// }

import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
//import Path_18191 from '../assets/Path_18191.svg';
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

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
    editbutton: {
      top: pxToRem(10),
              left: pxToRem(672),
              width: pxToVw(85),
              height: pxToVh(37),
              border: "1px solid #97A1A9",
              borderRadius: "10px",
              opacity: "1",
              textAlign: "left",
              color: " #FFFFFF",
            font: "Ubuntu",
            fontColor: "#97A1A9",
            textTransform: "none",
    },
    buttonResetColor:{
            color:"white",
            backgroundColor:"transparent",
            border: "1px solid #14AFF1"
  },
    buttonSaveColor:{
            color:"white",
            backgroundColor:"#14AFF1"
  },
    buttonCancelColor:{
            color:"#14AFF1",
           // backgroundColor:"#14AFF1"
      right: pxToRem(120),
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
    padding: theme.spacing(1),
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


// const useStyles = makeStyles(() => ({
//   root: {
//     display: "flex",
//     flexGrow: 1,
//   },
//     editbutton: {
//         top: pxToRem(-164),
//         left: pxToRem(1220),
//         width: pxToVw(85),
//         height: pxToVh(37),
//         border: "1px solid #97A1A9",
//         borderRadius: "10px",
//         opacity: "1",
//         textAlign: "left",
//         color: " #FFFFFF",
//       font: "Ubuntu",
//       fontColor: "#97A1A9",
//       textTransform: "none",
//     },
// }));

export default function EditButton() {
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
      <Button onClick={handleClickOpen} className={classes.root, classes.editbutton} variant="outlined" color="primary" disableElevation startIcon={<EditIcon />}>
          {/* <img src={Path_18191} alt="Path_18191" /> */}
      Edit
    </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Edit Invoice
        </DialogTitle>
        <DialogContent dividers>
          
          <div>
            <span>Invoice Amount</span>
            <span> &nbsp;&nbsp;
            <TextField
              id="outlined-secondary"
              //label="Outlined secondary"
              // variant="outlined"
              // color="primary"
              className={classes.styledText}
              />
              </span>
          </div>
          &nbsp;&nbsp;
          <div>
            <span>Notes</span>
            <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={4}
              variant="outlined"
              color="primary"
              //className={classes.styledText}
              />
              </span>
            </div>
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
            className={classes.buttonResetColor}
          >
            Reset
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
            className={classes.buttonSaveColor}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}