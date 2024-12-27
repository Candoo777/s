// src/MUIExample.js
import React from 'react';
import { Button, TextField, Checkbox, AppBar, Toolbar } from '@mui/material';

const MUIExample = () => {
  return (
    <div>
      <Button variant="contained">MUI Button</Button>
      <TextField label="Name" variant="outlined" />
      <Checkbox />
      <AppBar position="static">
        <Toolbar>MUI AppBar</Toolbar>
      </AppBar>
    </div>
  );
};

export default MUIExample;
