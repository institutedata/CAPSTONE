/** @format */

import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import SignupForm from '../Forms/SignupForm';
import { styled } from '@mui/system';

const DialogStyled = styled(Dialog)({
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  textAlign: 'center',
  alignItems: 'center',
  margin: '5vw',
});

const SignupDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [maxWidth, setMaxWidth] = React.useState('sm'); // Default maxWidth

  const handleClickOpen = () => {
    setOpen(true);
    setMaxWidth('md'); // Change maxWidth to 'md' (medium) when dialog is opened
  };

  const handleClose = () => {
    setOpen(false);
    setMaxWidth('sm'); // Reset maxWidth to 'sm' (small) when dialog is closed
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Sign Up Here
      </Button>
      <DialogStyled open={open} onClose={handleClose} maxWidth={maxWidth}>
        <DialogContent>
          <SignupForm />
        </DialogContent>
      </DialogStyled>
    </div>
  );
};

export default SignupDialog;
