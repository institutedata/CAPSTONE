/** @format */

import React from 'react';
import { StyledButton } from './ButtonStyles'; // Import your styled button
import SignupDialog from './SignupDialog'; // Import your SignupDialog component

function SignupButton() {
  // State to manage the dialog open/close state
  const [openDialog, setOpenDialog] = React.useState(false);

  // Function to handle opening the dialog
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  // Function to handle closing the dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <StyledButton onClick={handleOpenDialog}>Sign Up Here</StyledButton>

      {openDialog && <SignupDialog onClose={handleCloseDialog} />}
    </div>
  );
}

SignupButton.propTypes = {};

export default SignupButton;
