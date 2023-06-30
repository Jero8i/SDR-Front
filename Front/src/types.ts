import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

export interface RenderStepContentProps {
  activeStep: number;
  reservation: Reservation;
  handleNext: () => void;
  handlePrev: () => void;
  handleChangeStep1: (numberDiners: number) => void;
  handleChangeStep2: (date: string) => void;
  handleChangeStep3: (service: Service) => void;
  handleChangeStep4: (scheduleTime: string) => void;
  handleSubmit: () => void;
}

export enum DayOfWeek {
  lunes = "lunes",
  martes = "martes",
  miércoles = "miércoles",
  jueves = "jueves",
  viernes = "viernes",
  sábado = "sábado",
  domingo = "domingo",
}

export enum Classification {
  bronce = "Bronce",
  plata = "Plata",
  oro = "Oro",
  platino = "Platino",
}

export enum State {
  sin_confirmar = "SIN_CONFIRMAR",
  confirmada = "CONFIRMADA",
  planificada = "PLANIFICADA",
  demorada = "DEMORADA",
  caducada = "CADUCADA",
  cancelada = "CANCELADA",
}

export interface Customer {
  id: number | null;
  name: string;
  lastname: string;
  email: string;
  phonenumber: string;
  classification: number;
}

export interface Reservation {
  id: number | null;
  customer: Customer;
  service: Service;
  time: Date;
  state: number;
  numberDiners: number
  note: string;
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

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  flexGrow: 1,
}));
