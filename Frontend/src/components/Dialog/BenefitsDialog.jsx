/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Benefits from '../Text/Benefits.jsx';
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
  return (
    <Dialog open={open} onClose={onClose}>
      <Benefits />
    </Dialog>
  );
}

DialogContent.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default function JudoDialog({ dialogText }) {
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
      <DialogContent open={open} onClose={handleClose}>
        {dialogText}
      </DialogContent>
    </div>
  );
}

JudoDialog.propTypes = {
  dialogText: PropTypes.string,
};
