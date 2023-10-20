import React from 'react';
import { Typography } from '@mui/material';

function FactBox({ fact, message }) {
  return (
    <div>
      <Typography variant="h5">{fact}</Typography>
      <Typography variant="h6">{message}</Typography>
    </div>
  );
}

export default FactBox;
