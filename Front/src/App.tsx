import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import { Stepper, Step, StepLabel, Grid } from '@material-ui/core';
import { Reservation } from './types';

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [reservation, setReservation] = useState<Reservation>({
    numberOfPeople: 0,
    date: '',
    time: '',
    serviceSelected: ''
  });

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handlePrev = () => {
    setActiveStep(activeStep - 1);
  };

  const handleChangeStep1 = (numberOfPeople: number) => {
    setReservation({ ...reservation, numberOfPeople });
  };

  const handleChangeStep2 = (date: string) => {
    setReservation({ ...reservation, date });
  };

  const handleChangeStep3 = (serviceSelected: string) => {
    setReservation({ ...reservation, serviceSelected });
  };

  const handleChangeStep4 = (time: string) => {
    setReservation({ ...reservation, time });
  };

  const handleSubmit = () => {
    console.log('Reserva enviada:', reservation);
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Step1
            numberOfPeople={reservation.numberOfPeople}
            onNext={handleNext}
            onChange={handleChangeStep1}
          />
        );
      case 1:
        return (
          <Step2
            date={reservation.date}
            onPrev={handlePrev}
            onNext={handleNext}
            onChange={handleChangeStep2}
          />
        );
      case 2:
        return (
          <Step3
          reservation={reservation}
            onPrev={handlePrev}
            onNext={handleNext}
            onChange={handleChangeStep3}
          />
        );
      case 3:
        return (
          <Step4
            time={reservation.time}
            onPrev={handlePrev}
            onNext={handleNext}
            onChange={handleChangeStep4}
          />
        );
      case 4:
          return (
            <Step5
              reservation={reservation}
              onPrev={handlePrev}
              onSubmit={handleSubmit}
            />
          );
      default:
        return null;
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: '10vh' }}
    >
      <Stepper activeStep={activeStep}>
        <Step>
          <StepLabel>Cantidad de Personas</StepLabel>
        </Step>
        <Step>
          <StepLabel>Fecha</StepLabel>
        </Step>
        <Step>
          <StepLabel>Servicio</StepLabel>
        </Step>
        <Step>
          <StepLabel>Horario</StepLabel>
        </Step>
        <Step>
          <StepLabel>Resumen</StepLabel>
        </Step>
      </Stepper>
      {renderStepContent(activeStep)}
    </Grid>
  );
}

export default App;
