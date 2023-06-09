import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export interface RenderStepContentProps {
  activeStep: number;
  reservation: Reservation;
  handleNext: () => void;
  handlePrev: () => void;
  handleChangeStep1: (numberOfPeople: number) => void;
  handleChangeStep2: (date: string) => void;
  handleChangeStep3: (serviceSelected: string) => void;
  handleChangeStep4: (time: string) => void;
  handleSubmit: () => void;
}

export interface Reservation {
    numberOfPeople: number;
    date: string;
    time: string;
    serviceSelected: string;
  }

  export interface Service {
    id: number;
    name: string;
  }

  export const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flexGrow: 1,
  }));