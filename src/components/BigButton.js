import React from 'react';
import chuck from '../assets/chuck.png';
import { Button } from '@mui/material';

function BigButton({ generate }) {
  return (
    <div>
      <Button variant="outlined" onClick={generate}>
        <img src={chuck} alt="Chuck Norris" height="130px" />
      </Button>
    </div>
  );
}

export default BigButton;
