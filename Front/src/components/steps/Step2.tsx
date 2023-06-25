import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Button, Grid, TextField } from '@mui/material';
import { Item } from '../../types';

interface Step2Props {
  date: string;
  onPrev: () => void;
  onNext: () => void;
  onChange: (value: string) => void;
}

const Step2: React.FC<Step2Props> = ({ date, onPrev, onNext, onChange }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
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
          <Item><h2>Seleccionar fecha</h2></Item>
          <Item><TextField
            InputLabelProps={{ shrink: true }}
            type="date"
            label="Fecha"
            value={date}
            onChange={handleInputChange}
          /></Item>
          <Item>
          <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              style={{ height: '10vh' }}
              spacing={2}
              >
              <Grid item><Button variant="contained" color="primary" onClick={onPrev}>Anterior</Button></Grid>
              <Grid item><Button variant="contained" color="primary" onClick={onNext}>Siguiente</Button></Grid>
            </Grid>
          </Item>
        </Stack>
      </Box>
    </Grid>
  );
}

export default Step2;
