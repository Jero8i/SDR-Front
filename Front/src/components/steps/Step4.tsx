import React from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import { Item, Reservation } from "../../types";

function getDayOfWeek(date: Date): string {
  const day = date.getDay();

  switch (day) {
    case 0:
      return "lunes";
    case 1:
      return "martes";
    case 2:
      return "miércoles";
    case 3:
      return "jueves";
    case 4:
      return "viernes";
    case 5:
      return "sábado";
    case 6:
      return "domingo";
    default:
      throw new Error("Invalid day");
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

  const handleSelectChange = (event: SelectChangeEvent) => {
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
