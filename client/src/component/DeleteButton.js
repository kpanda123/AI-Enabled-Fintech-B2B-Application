// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import RemoveIcon from '@material-ui/icons/Remove';
// //import Path_18189_1 from '../assets/Path_18189_1.svg';
// import { pxToRem, pxToVw, pxToVh } from '../utils/theme';

// const useStyles = makeStyles(() => ({
//   root: {
//     display: "flex",
//     flexGrow: 1,
//   },
//     deletebutton: {
//         top: pxToRem(10),
//         left: pxToRem(687),
//         width: pxToVw(95),
//         height: pxToVh(37),
//         border: "1px solid #14AFF1",
//         borderRadius: "10px",
//         opacity: "1",
//         textAlign: "left",
//         color: " #FFFFFF",
//         font: "Ubuntu",
//         textTransform: "none",
//     },
// }));

// export default function DeleteButton() {
//     const classes = useStyles();
//   return (
//       <Button className={classes.root, classes.deletebutton} variant="outlined" color="primary" disableElevation startIcon={<RemoveIcon />} >
//           {/* <img src={Path_18189_1} alt="Path_18189_1" /> */}
//      Delete
//     </Button>
//   );
// }
import React from "react";
import { withStyles,makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { pxToRem, pxToVw, pxToVh } from '../utils/theme';

// import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grid from "@material-ui/core/Grid";

const styles = (theme) => ({
  root: {
    // margin: 0,
    // padding: theme.spacing(2),
     backgroundColor:"#2A3F4D",
    // color:'white'
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
    padding: theme.spacing(2),
    backgroundColor: '#2A3F4D',
    color: "white"
  }
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({

  root: {
    margin: 0,
    padding: theme.spacing(1),
    backgroundColor: '#2A3F4D'
  },

}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const useStyles= makeStyles((theme)=>({
    deletebutton: {
              top: pxToRem(10),
              left: pxToRem(687),
              width: pxToVw(95),
              height: pxToVh(37),
              border: "1px solid #14AFF1",
              borderRadius: "10px",
              opacity: "1",
              textAlign: "left",
              color: " #FFFFFF",
              font: "Ubuntu",
              textTransform: "none",
          },
      
      buttonCancelColor:{
            color:"white",
            backgroundColor:"transparent",
            border: "1px solid #14AFF1"
      },
      buttonSaveColor:{
            color:"white",
            backgroundColor:"#14AFF1"
      },
      changeDialog: {
        maxWidth : '47%', 
        maxHeight : '47%',
        display:'flex',
        justifyContent:"center",
        margin: 'auto'
      },
      spanEdit:{
          color:"#FF5E5E"
      }
  }))
  const classes = useStyles();
  return (
    <div>
        {/* outer button */}
      <Button variant="outlined" className={classes.deletebutton} color="primary" onClick={handleClickOpen}>
        Delete
      </Button>

      {/* dialog box body starts here */}

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className={classes.changeDialog}
      >

        {/* Dialog box title starts here   */}
        <DialogTitle id="customized-dialog-title" onClose={handleClose} >
          Delete record(s)?
        </DialogTitle>

        {/* Dialog box content starts here */}

        <DialogContent dividers>
          <Typography gutterBottom>
            You'll lose your record(s) after this action. We can't recover them
            once you delete.
          </Typography>
          <Typography gutterBottom>
            Are you sure you want to <span className={classes.spanEdit}>permanently delete</span> them?
          </Typography>
        </DialogContent>

        {/* Dialog box action buttons starts here */}

        <DialogActions>
          <div>
            <Grid container spacing={2}>
              <Grid item>
                <Button autoFocus onClick={handleClose} color="primary" className={classes.buttonCancelColor}>
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary" className={classes.buttonSaveColor}>
                  Save
                </Button>
              </Grid>
            </Grid>

            {/* main grid ending */}

          </div>
        </DialogActions>


      </Dialog>

    </div>
  );
}