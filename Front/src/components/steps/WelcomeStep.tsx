import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';

import '../../styles/App.css';

interface WelcomeStepProps {
  onNext: () => void;
  onChange: (value: number) => void;
}

const WelcomeStep: React.FC<WelcomeStepProps> = ({ onNext, onChange }) => {

  return (
    <Grid container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={{ xs: 4, sm: 4, md: 4, lg: 4 }}
    >
      <Grid item>
        <img src="../../HOLMES-MARCA.png" alt="Logo de HOLMES" />
      </Grid>
      
      <Grid item>
        <Typography variant="h2" color="primary"
          sx={{
            fontSize: {
              xs: '1.8rem', sm: '2.6rem', md: '3.3rem', lg: '3.7rem',
          },
        }}
        >
          HOLMES BREWERY
        </Typography>
      </Grid>
 
      <Grid item sx={{ mt: -5 }}>
        <Typography variant="h5" color="success.main" style={{fontFamily: "Roboto Slab, serif"}}
        sx={{
          fontSize: {
            xs: '1.2rem', sm: '1.3rem', md: '1.5rem', lg: '1.8rem',
        },
        }}
        >
          Sistema de reservas</Typography>
      </Grid>

      <Grid item container justifyContent="center" alignItems="center">
        <Button variant="contained" color="primary" size="large" onClick={onNext} startIcon={<RestaurantIcon />}
        sx={{
          minWidth: {
            xs: '80%', sm: '80%', md: '80%', lg: '100%', 
          },
          '&:hover': {
            backgroundColor: '#606C38',
          },
        }}>
        Reservar</Button>
      </Grid>

    </Grid>
  );
}

export default WelcomeStep;