import React, { useState } from 'react';
import { useMultistep } from './UseMultistep';
import { RenderStepContent } from './components/RenderStepContent';
import StepperComponent from './components/StepperComponent';
import { Grid } from '@material-ui/core';
import './styles/App.css';
import './styles/Card.css';

function App() {
  const { activeStep, reservation, handleNext, handlePrev, handleChangeStep1, handleChangeStep2, handleChangeStep3, handleChangeStep4, handleSubmit } = useMultistep();

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: '10vh' }}
    >
      <StepperComponent activeStep={activeStep} />
      {RenderStepContent({activeStep, reservation, handleNext, handlePrev, handleChangeStep1, handleChangeStep2, handleChangeStep3, handleChangeStep4, handleSubmit})}
    </Grid>
  );
}

export default App;

