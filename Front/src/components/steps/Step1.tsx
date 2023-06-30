import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Button, Grid, TextField } from '@mui/material';
import { Item } from '../../types';

interface Step1Props {
  numberDiners: number;
  onNext: () => void;
  onChange: (value: number) => void;
}

const Step1: React.FC<Step1Props> = ({ numberDiners, onNext, onChange }) => {
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
    <Box sx={{ width: 300 }}>
      <Stack spacing={{ xs: 1, sm: 1 }} direction="row" useFlexGap flexWrap="wrap">
        <Item><h2>Cantidad de personas</h2></Item>
        <Item><TextField
          type="number"
          label="Número de personas"
          value={numberDiners}
          onChange={handleInputChange}
        /></Item>
        <Item><Button variant="contained" color="primary" onClick={onNext}>Siguiente</Button></Item>
      </Stack>
    </Box>
    </Grid>
  );
}

export default Step1;
