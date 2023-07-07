import { useState } from "react";
import Box from '@mui/material/Box';
import { Button, Grid, TextField, ThemeProvider, Typography } from '@mui/material';
import { useWindowRezise } from '../../hooks/useWindowRezise';
import { theme } from '../../styles/themeProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import 'dayjs/locale/es'; // Importa el idioma español de dayjs

import "../../styles/Step2.css";

dayjs.locale('es'); // Establece el idioma español en dayjs

interface Step2Props {
  date: string;
  onPrev: () => void;
  onNext: () => void;
  onChange: (value: string) => void;
}

const Step2: React.FC<Step2Props> = ({ date, onPrev, onNext, onChange }) => {
  const handleInputChange = (value: string|null) => {
    if (value!=null){
      setSelectedDate(value);
    }
  };

  const handleNext = () => {
    onChange(selectedDate);
    onNext();
  }

  const [selectedDate, setSelectedDate] = useState("");
  const { isMedium, isMobile } = useWindowRezise();

  return (
    <Box
      display="flex"
      flexDirection= "column"
      justifyContent="center"
      alignItems="center"
      sx={{
        width: '100%', 
        marginTop: '5%', 
      }}
    >
      <Grid container>
        <Grid item justifyContent="center"
          sx={{ 
            color: theme.palette.primary.main,
          }}>
          <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DateCalendar              
              className="calendar" 
              disablePast={true} 
              views={['day']} 
              onChange={handleInputChange}
              />
          </LocalizationProvider>
        </Grid>

        <Grid item
        sx={{
          position: 'absolute',
          bottom: '5%',
          left: '5%',
        }}>
          <Button variant="contained" color="primary" onClick={onPrev}>Anterior</Button>
        </Grid>

        <Grid item
        sx={{
          position: 'absolute',
          bottom: '5%',
          right: '5%',
        }}>
          <Button variant="contained" color="primary" onClick={onNext}>Siguiente</Button>
        </Grid>
      </Grid>
      
    </Box>
  );

}

export default Step2;
