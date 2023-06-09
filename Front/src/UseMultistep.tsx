import { useState } from "react";
import { Reservation } from './types';

export function useMultistep() {
    
    const [activeStep, setActiveStep] = useState(0);
    const [reservation, setReservation] = useState<Reservation>({
        numberOfPeople: 0,
        date: '',
        time: '',
        serviceSelected: ''
    });

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handlePrev = () => {
        setActiveStep(activeStep - 1);
    };

    const handleChangeStep1 = (numberOfPeople: number) => {
        setReservation({ ...reservation, numberOfPeople });
    };

    const handleChangeStep2 = (date: string) => {
        setReservation({ ...reservation, date });
    };

    const handleChangeStep3 = (serviceSelected: string) => {
        setReservation({ ...reservation, serviceSelected });
    };

    const handleChangeStep4 = (time: string) => {
        setReservation({ ...reservation, time });
    };

    const handleSubmit = () => {
        console.log('Reserva enviada:', reservation);
    };

    return{
        activeStep, 
        reservation,
        handleNext,
        handlePrev,
        handleChangeStep1,
        handleChangeStep2,
        handleChangeStep3,
        handleChangeStep4,
        handleSubmit
    }

}