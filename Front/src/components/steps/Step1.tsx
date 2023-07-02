import React, {useState, useEffect} from 'react';
import { Box, Button, Grid, InputAdornment, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import '../../styles/Step1.css'
import BoyIcon from '@mui/icons-material/Boy';

interface Step1Props {
  numberOfPeople: number;
  onNext: () => void;
  onChange: (value: number) => void;
}

interface NumberButtonProps{
  value: string;
  selectedValue: number|string;
  handleButtonClick: (value: number|string) => void;
}

const NumberButton: React.FC<NumberButtonProps> = ({value, selectedValue, handleButtonClick}) => {
  return(
    <Button
    variant="contained"
    onClick={() => handleButtonClick(value)}
    color={value === selectedValue.toString() ? 'primary' : 'secondary'}
    className="numberButton"
    sx={{
      width:{
        xs: '20px', sm: '50px', md: '65px', lg: '70px',
      },
      height:{
        xs: '60px', sm: '60px', md: '63px', lg: '68px',
      },
      fontSize: '130%',
      marginTop:{
        xs: '5%', sm: '8%', md: '10%', lg: '15%',
      },
    }}
    >
      {value}
    </Button>
  );
}

const Step1: React.FC<Step1Props> = ({ numberOfPeople, onNext, onChange }) => {

  const [selectedValue, setSelectedValue] = useState<number|string>('');
  const [showTextField, setShowTextField] = useState<boolean>(false);
  const [isNegative, setIsNegative] = useState<boolean>(false);

  React.useEffect(() => {
    console.log(selectedValue);
  }, [selectedValue]);

  const handleButtonClick = (value: number|string) => {
    setSelectedValue(value);
    if (value === '+') {
      setShowTextField(true);
    } else {
      setShowTextField(false);
      setIsNegative(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const number = parseInt(event.target.value);
    if (number<=0){
      setIsNegative(true);
    } else{
      setIsNegative(false);
      setSelectedValue(number);
    }
    
  };

  const handleNext = () => {
    if (+selectedValue > 0){
      onChange(+selectedValue);
      onNext();
    }
  }

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

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
      <Grid item
      sx={{
        textAlign: 'center',
        marginTop: 
        showTextField ? { xs: '2%', sm: '6%', md: '10%', lg: '8%' } 
        : { xs: '3%', sm: '7%', md: '11%', lg: '19%' }
      }}>
        <Typography variant='h5'
        sx={{
          fontSize: {
            xs: '110%', sm: '130%', md: '140%', lg: '140%',
          },
        }}>
        Elija una cantidad de personas</Typography>
      </Grid>

      <Grid item
      sx={{
        textAlign: 'center', 
        width: {
          xs: '120%', sm: '115%',
        },
        marginTop:{
          xs: '3%', sm: '5%', md: '8%', lg: '8%',
        },
      }}>
        <NumberButton value='1' selectedValue={selectedValue} handleButtonClick={handleButtonClick} />
        <NumberButton value='2' selectedValue={selectedValue} handleButtonClick={handleButtonClick} />
        <NumberButton value='3' selectedValue={selectedValue} handleButtonClick={handleButtonClick} />
        <NumberButton value='4' selectedValue={selectedValue} handleButtonClick={handleButtonClick} />
        {!isXs && (<NumberButton value="5" selectedValue={selectedValue} handleButtonClick={handleButtonClick}/>)}
        <NumberButton value='+' selectedValue={selectedValue} handleButtonClick={handleButtonClick} />
      </Grid>

      {showTextField || isNegative ? (
        <Grid item
          sx={{
            marginTop:{
              xs: '3%', sm: '5%', md: '8%', lg: '10%',
            },
          }}
        >
          <TextField
            type="number"
            error= {isNegative ? true : false}
            helperText={isNegative ? 'El número no puede ser negativo ni cero.' : ''}
            label="Número de personas"
            onChange={handleInputChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BoyIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid> ) : null
      }

      <Grid item
      sx={{
        position: 'absolute',
        bottom: '5%',
        right: '5%',
      }}>
        <Button variant="contained" color="primary" onClick={handleNext}>Siguiente</Button>
      </Grid>
    </Box>
  );
}

export default Step1;
