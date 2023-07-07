import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import marca from '../../images/marca.png';
import { useWindowRezise } from '../../hooks/useWindowRezise';

const WelcomeStep = ({onNext}: {onNext: () => void}) => {

  const { isMedium, isMobile } = useWindowRezise();

  return (
    <Box>
      <Grid container
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        spacing={{ xs: 4, sm: 4, md: 4, lg: 4 }}
      >
        <Grid item sx={{mt:'-40px', mb:'-30px'}}>
          <img src={marca} alt="Logo de HOLMES" height= {isMobile ? '50px' : isMedium ? '80px' : '120px'}/>
        </Grid>
        
        <Grid item>
          <Typography variant="h2" color="error"
            sx={{
              fontSize: {
                xs: '1.7rem', sm: '2.6rem', md: '3.3rem', lg: '3.7rem',
              },
            }}
          >
            HOLMES BREWERY
          </Typography>
        </Grid>
  
        <Grid item sx={{ mt: -5 }}>
          <Typography variant="h5" color="info" style={{fontFamily: "Roboto Slab, serif"}}
          sx={{
            fontSize: {
              xs: '1.2rem', sm: '1.3rem', md: '1.5rem', lg: '1.8rem',
          },
          }}
          >
            Sistema de reservas</Typography>
        </Grid>

        <Grid item container justifyContent="center" alignItems="center">
          <Button variant="contained" color='error' size="large" onClick={onNext} startIcon={<RestaurantIcon />}
          sx={{
            minWidth: {
              xs: '80%', sm: '80%', md: '80%', lg: '100%', 
            },
            '&:hover': {
              backgroundColor: 'primary',
            },
          }}>
          Reservar</Button>
        </Grid>

      </Grid>
    </Box>
  );
}

export default WelcomeStep;