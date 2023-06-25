import React from 'react';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select } from '@material-ui/core';
import { Stack } from '@mui/material';
import { DayOfWeek, Item, Reservation, Service } from '../../types';
import { useMultistep } from '../../UseMultistep';

function getDayOfWeek(date: Date): DayOfWeek {
  const day = date.getDay();

  switch (day) {
    case 0:
      return DayOfWeek.lunes;
    case 1:
      return DayOfWeek.martes;
    case 2:
      return DayOfWeek.miércoles;
    case 3:
      return DayOfWeek.jueves;
    case 4:
      return DayOfWeek.viernes;
    case 5:
      return DayOfWeek.sábado;
    case 6:
      return DayOfWeek.domingo;
    default:
      throw new Error('Invalid day');
  }
}

interface Step4Props {
  time: string;
  reservation: Reservation;
  onPrev: () => void;
  onNext: () => void;
  onChange: (value: string) => void;
  selectedService: Service | null;
}

const Step4: React.FC<Step4Props> = ({ time, reservation, onPrev, onNext, onChange, selectedService }) => {
  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };
  const date = new Date(reservation.date);
  const dayOfWeek = getDayOfWeek(date);
  const scheduleTimes = selectedService?.schedule.schedule[dayOfWeek];
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
              {scheduleTimes &&
                scheduleTimes.map((scheduleTime, index) => (
                  <MenuItem key={index} value={`${scheduleTime.hour}:${scheduleTime.minute}`}>
                    {`${scheduleTime.hour}:${scheduleTime.minute}`}
                  </MenuItem>
                ))}
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
