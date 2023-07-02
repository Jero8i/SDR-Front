import React from 'react';
import { useMultistep } from './UseMultistep';
import { RenderStepContent } from './components/RenderStepContent';
import { Grid } from '@mui/material';

import StepperComponent from './components/StepperComponent';
import './styles/App.css';

function App() {
  const { activeStep, reservation, handleNext, handlePrev, handleChangeStep1, handleChangeStep2, 
        handleChangeStep3, handleChangeStep4, handleSubmit, setSelectedService, selectedService } = useMultistep();

  return (
    <div className="background">
      <Grid
      container
      direction="column"
      justifyContent={activeStep !== -1 ? 'flex-start' : 'center'}
      alignItems="center"
      sx={{
        backgroundColor: 'rgba(254, 250, 224)',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        height: {
          xs: '50%', sm: '55%', md: '60%', lg: '65%', 
        },
        width: {
          xs: '80%', sm: '70%', md: '57%', lg: '50%', 
        },
        position: 'relative',
      }}
    >

      <Grid item>
        {activeStep !== -1 && <StepperComponent activeStep={activeStep} />}
      </Grid>

      <Grid item>
        {RenderStepContent({activeStep, reservation, handleNext, handlePrev, handleChangeStep1, handleChangeStep2, handleChangeStep3, handleChangeStep4, handleSubmit, setSelectedService, selectedService })}
      </Grid>

      </Grid>
    </div>
  );

}

export default App;

