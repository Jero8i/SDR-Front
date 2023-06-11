import React from 'react';
import { useMultistep } from './UseMultistep';
import { RenderStepContent } from './components/RenderStepContent';
import StepperComponent from './components/StepperComponent';
import { Box } from '@material-ui/core';
import './styles/App.css';
import './styles/Card.css';

function App() {
  const { activeStep, reservation, handleNext, handlePrev, handleChangeStep1, handleChangeStep2, handleChangeStep3, handleChangeStep4, handleSubmit, setSelectedService, selectedService } = useMultistep();

  return (
    <div className="container">
      <Box 
      style={{
        backgroundColor: 'rgba(42, 31, 22, 0.95)',
      }}
      sx={{
        borderRadius: '10px',
        width: '50%',
        height: '65%',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
      }}>
        <StepperComponent activeStep={activeStep} />
        {RenderStepContent({activeStep, reservation, handleNext, handlePrev, handleChangeStep1, handleChangeStep2, handleChangeStep3, handleChangeStep4, handleSubmit, setSelectedService, selectedService })}
       </Box>
    </div>
  );
}

export default App;

