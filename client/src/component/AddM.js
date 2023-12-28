import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import AddButton from './AddBtn'

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    backgroundColor: "#2A3E4C",
    color: "white"
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
    backgroundColor: "#2A3E4C"
  }
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    backgroundColor: "#2A3E4C"
  }
}))(MuiDialogActions);

export default function AddDialogue() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
          {/* <AddButton/> */}
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add Invoice
        </DialogTitle>
        <DialogContent dividers>
          <div>
            <span>Customer Name*</span>
            <TextField
              id="outlined-secondary"
              //label="Outlined secondary"
              variant="outlined"
              color="primary"
            />
            <span>Customer Number*</span>
            <TextField
              id="outlined-secondary"
              //label="Outlined secondary"
              variant="outlined"
              color="primary"
            />
            <span>Invoice Number*</span>
            <TextField
              id="outlined-secondary"
              //label="Outlined secondary"
              variant="outlined"
              color="primary"
            />
            <span>Invoice Amount*</span>
            <TextField
              id="outlined-secondary"
              //label="Outlined secondary"
              variant="outlined"
              color="primary"
            />

            <span>Due Date*</span>
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
            <span>Notes</span>
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={4}
              variant="outlined"
              color="primary"
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            autoFocus
            onClick={handleClose}
            text-align="left"
            font="normal normal normal 20px/24px Ubuntu"
            letter-spacing="0px"
            color="#FFFFFF"
            opacity="1"
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
            backgroundColor="#14AFF1"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}