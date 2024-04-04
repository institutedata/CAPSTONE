/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Hajamie from '../Text/Hajamie.jsx';
import useStyles from './DialogStyles';
import DialogStyled from './DialogStyles';
// ... other imports

function OpenDialogButton({ onClick }) {
  return (
    <Button variant="outlined" onClick={onClick}>
      Read More...
    </Button>
  );
}

OpenDialogButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

function DialogContent({ open, onClose }) {
  const classes = useStyles();
  return (
    <Dialog open={open} onClose={onClose}>
      <div className={classes.dialogContent}>
        <Hajamie />
      </div>
    </Dialog>
  );
}

DialogContent.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default function AboutDialog({ dialogText }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <OpenDialogButton onClick={handleClickOpen} />
      <DialogStyled open={open} onClose={handleClose}>
        {dialogText}
      </DialogStyled>
    </div>
  );
}

AboutDialog.propTypes = {
  dialogText: PropTypes.string.isRequired,
};
