import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Button, Grid } from '@mui/material';
import { Item } from '../../types';
import '../../styles/App.css';

interface WelcomeStepProps {
  onNext: () => void;
}

const WelcomeStep: React.FC<WelcomeStepProps> = ({ onNext }) => {

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: '10vh' }}
    >
    <Box sx={{ width: 300 }}>
      <Stack spacing={{ xs: 1, sm: 1 }} direction="row" useFlexGap flexWrap="wrap">
        <Item>
          <Button className="make-reservation" variant="contained" onClick={onNext}>Reservar</Button>
        </Item>
      </Stack>
    </Box>
    </Grid>
  );
}

export default WelcomeStep;