import React from 'react';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select } from '@material-ui/core';
import { Stack } from '@mui/material';
import { Item } from '../types';

interface Step4Props {
  time: string;
  onPrev: () => void;
  onNext: () => void;
  onChange: (value: string) => void;
}

const Step4: React.FC<Step4Props> = ({ time, onPrev, onNext, onChange }) => {
  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
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
        <Item><h2>Seleccionar horario</h2></Item>
        <Item>
          <FormControl>
            <InputLabel id="time-label">Horario</InputLabel>
            <Select
              labelId="time-label"
              value={time}
              onChange={handleSelectChange}
            >
              <MenuItem value="">Seleccionar horario</MenuItem>
              <MenuItem value="13">13:00</MenuItem>
              <MenuItem value="14">14:00</MenuItem>
              <MenuItem value="15">15:00</MenuItem>
            </Select>
          </FormControl>
        </Item>
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

export default Step4;
