import React, { useState, useEffect } from 'react';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select } from '@material-ui/core';
import { Item, Reservation, Service } from '../../types';
import { Stack } from '@mui/material';
import { fetchServices } from '../../api';

interface Step3Props {
  reservation: Reservation;
  onPrev: () => void;
  onNext: () => void;
  onChange: (value: string) => void;
  setSelectedService: (service: Service | null) => void;
}
try {
  // Código donde ocurre el error
} catch (error) {
  console.log(error);
}
const Step3: React.FC<Step3Props> = ({ reservation, onPrev, onNext, onChange, setSelectedService }) => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchServicesData = async () => {
      try {
        const services = await fetchServices(reservation.date);
        setServices(services);
      } catch (error) {
        // Manejar el error aquí según tus necesidades
      }
    };
    fetchServicesData();
  }, []);

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedServiceId = event.target.value as string;
    const selectedService = services.find(service => service.name === selectedServiceId);
    if (selectedService) {
      setSelectedService(selectedService);
      onChange(selectedService.name);
    }
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
          <Item><h2>Seleccionar servicio</h2></Item>
          <Item>
            <FormControl>
              <InputLabel id="service-label">Servicio</InputLabel>
              <Select
                labelId="service-label"
                value={reservation.selectedServiceId}
                onChange={handleSelectChange}
              >
                <MenuItem value="">Seleccionar servicio</MenuItem>
                {services.map(service => (
                  <MenuItem key={service.name} value={service.name}>
                    {service.name}
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

export default Step3;