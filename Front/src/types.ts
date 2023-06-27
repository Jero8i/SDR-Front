import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export interface Reservation {
    numberOfPeople: number;
    date: string;
    time: string;
    selectedServiceId: string;
  }

  export interface Service {
    name: string;
    startDate: Date;
    endDate: Date;
    isActive: boolean;
    maxPeople: number;
    schedule: Schedule;
  }

  export interface Schedule {
    schedule: { [key in DayOfWeek]?: ScheduleTime[] };
  }
  
  interface ScheduleTime {
    hour: number;
    minute: number;
  }

  export enum DayOfWeek {
    lunes = "lunes",
    martes = "martes",
    miércoles = "miércoles",
    jueves = "jueves",
    viernes = "viernes",
    sábado = "sábado",
    domingo = "domingo"
  }

  export const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flexGrow: 1,
  }));