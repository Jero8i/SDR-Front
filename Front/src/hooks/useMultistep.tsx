import { useState } from "react";
import {
  Reservation,
  Service,
} from "../types";

export function useMultistep() {
  const [activeStep, setActiveStep] = useState(-1);
  const [reservation, setReservation] = useState<Reservation>({
    id: null,
    customer: {
      id: 'B9C44749-C0D2-4E16-234F-08DB7CDB4845',
      name: "...",
      lastname: "...",
      email: "ejemplo@email.com",
      phonenumber: "1234567890",
      classification: 0,
    },
    service: {
      id: '',
      name: "",
      startDate: new Date(),
      endDate: new Date(),
      isActive: false,
      maxPeople: 0,
      schedule: {},
    },
    time: new Date(),
    state: 0,
    numberDiners: 0,
    note: "Reserva enviada desde Front.",
  });

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handlePrev = () => {
    setActiveStep(activeStep - 1);
  };

  const handleChangeStep1 = (numberDiners: number) => {
    setReservation({ ...reservation, numberDiners });
  };

  const handleChangeStep2 = (date: string) => {
    const [day, month, year] = date.split('/');
    const time = new Date(Number(year)+2000, Number(month)-1, Number(day));
    setReservation({ ...reservation, time });
  };

  const handleChangeStep3 = (service: Service) => {
    setReservation({ ...reservation, service });
  };

  const handleChangeStep4 = (scheduleTime: string) => {
    const [hoursStr, minutesStr] = scheduleTime.split(":");
    const hours = parseInt(hoursStr, 10);
    const minutes = parseInt(minutesStr, 10);

    if (!isNaN(hours) && !isNaN(minutes)) {
      const time = reservation.time;
      time.setHours(hours, minutes);

      console.log(`Time in handleChangeStep4: ${time}`);
      console.log(`JSON Time in handleChangeStep4: ${JSON.stringify(time)}`);
      setReservation({ ...reservation, time });
    }
  };

  const handleSubmit = () => {
    console.log("Reserva enviada:", reservation);
  };

  return {
    activeStep,
    reservation,
    handleNext,
    handlePrev,
    handleChangeStep1,
    handleChangeStep2,
    handleChangeStep3,
    handleChangeStep4,
    handleSubmit,
  };
}
