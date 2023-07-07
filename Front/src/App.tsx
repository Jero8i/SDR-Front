import React from "react";
import { useMultistep } from "./hooks/useMultistep";
import { RenderStepContent } from "./components/RenderStepContent";
import { Box, Container, Grid } from '@mui/material';

import StepperComponent from "./components/StepperComponent";
import background from './images/background.jpg';
import { theme } from "./styles/themeProvider";

function App() {
  const {
    activeStep,
    reservation,
    handleNext,
    handlePrev,
    handleChangeStep1,
    handleChangeStep2,
    handleChangeStep3,
    handleChangeStep4,
    handleSubmit,
  } = useMultistep();

  return (
    <Container 
      sx={{
      height: '100vh', 
      minWidth: '100vw',
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: theme.palette.primary.light,
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
          height: {
            xs: '40%', sm: '55%', md: '60%', lg: '65%', 
          },
          width: {
            xs: '80%', sm: '70%', md: '57%', lg: '50%', 
          },
          position: 'relative',
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent={activeStep !== -1 ? 'flex-start' : 'center'}
          alignItems="center"
          height= '100%'
        >

          {activeStep !== -1 && (
            <Grid item>
             <StepperComponent activeStep={activeStep} />
            </Grid>
          )}
    
          <Grid item>
            {RenderStepContent({
              activeStep,
              reservation,
              handleNext,
              handlePrev,
              handleChangeStep1,
              handleChangeStep2,
              handleChangeStep3,
              handleChangeStep4,
              handleSubmit,
            })}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
  
}
  
  export default App;
