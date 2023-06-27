import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Button, Grid, TextField } from '@mui/material';
import { Item } from '../../types';

interface Step1Props {
  numberOfPeople: number;
  onNext: () => void;
  onChange: (value: number) => void;
}

const Step1: React.FC<Step1Props> = ({ numberOfPeople, onNext, onChange }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(parseInt(event.target.value));
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: '10vh' }}
    >
      <Grid item sx={{ width: 300 }}>
        <Grid item container spacing={{ xs: 1, sm: 1 }} direction="row">
          <Grid item><h2>Cantidad de personas</h2></Grid>
          <Grid item><TextField
          type="number"
          label="Número de personas"
          value={numberOfPeople}
          onChange={handleInputChange}
          /></Grid>
          <Grid><Button variant="contained" color="primary" onClick={onNext}>Siguiente</Button></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Step1;
