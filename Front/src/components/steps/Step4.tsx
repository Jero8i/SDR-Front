import React from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { Stack } from "@mui/material";
import { Item, Reservation } from "../../types";

function getDayOfWeek(date: Date): number {
  const day = date.getDay();

  switch (day) {
    case 6:
      return 0;
    default:
      return day + 1;
  }
}

interface Step4Props {
  time: string;
  reservation: Reservation;
  onPrev: () => void;
  onNext: () => void;
  onChange: (value: string) => void;
}

const Step4: React.FC<Step4Props> = ({
  time,
  reservation,
  onPrev,
  onNext,
  onChange,
}) => {
  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };
  const date = reservation.time;
  const dayOfWeek = getDayOfWeek(date);
  const scheduleTimes = reservation.service?.schedule[dayOfWeek];
  const defaultValue = scheduleTimes?.includes(reservation.time.toLocaleTimeString()) ? reservation.time.toLocaleTimeString() : "";

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "10vh" }}
    >
      <Box sx={{ width: 300 }}>
        <Stack
          spacing={{ xs: 1, sm: 1 }}
          direction="row"
          useFlexGap
          flexWrap="wrap"
        >
          <Item>
            <h2>Seleccionar horario</h2>
          </Item>
          <Item>
            <FormControl>
              <InputLabel id="time-label">Horario</InputLabel>
              <Select
                labelId="time-label"
                value={defaultValue}
                onChange={handleSelectChange}
              >
                <MenuItem value="">Seleccionar horario</MenuItem>
                {scheduleTimes &&
                  scheduleTimes.map((timeString, index) => (
                    <MenuItem
                      key={index}
                      value={timeString}
                    >
                      {timeString}
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
              style={{ height: "10vh" }}
              spacing={2}
            >
              <Grid item>
                <Button variant="contained" color="primary" onClick={onPrev}>
                  Anterior
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" onClick={onNext}>
                  Siguiente
                </Button>
              </Grid>
            </Grid>
          </Item>
        </Stack>
      </Box>
    </Grid>
  );
};

export default Step4;
