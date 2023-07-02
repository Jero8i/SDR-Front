import '../styles/Stepper.css';
import { MobileStepper, Stepper, Step, StepLabel } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import { useEffect, useState } from 'react';

const StepperComponent = ({ activeStep }: { activeStep: number }) => {

    const [isMedium, setIsMedium] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMedium(window.matchMedia('(max-width: 768px)').matches);
            setIsMobile(window.matchMedia('(max-width: 375px)').matches);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <>
        {isMobile ? (
            <MobileStepper
                activeStep={activeStep}
                steps={6}
                variant="dots"
                position="static"
                sx={{ maxWidth: 400, backgroundColor: 'transparent' }} 
                backButton={undefined} 
                nextButton={undefined}
            />
        ) : (
            <Stepper 
            style={{ background: 'none' }}
            activeStep={activeStep}
            alternativeLabel={isMedium ? true : false}
            className="custom-stepper"
            >
                <Step>
                    <StepLabel icon={<AccountCircleIcon className="custom-icon"/>} >Personas</StepLabel>
                </Step>
                <Step>
                    <StepLabel icon={<EventRoundedIcon className="custom-icon"/>} >Fecha</StepLabel>
                </Step>
                <Step>
                    <StepLabel icon={<SportsBarIcon className="custom-icon"/>}>Servicio</StepLabel>
                </Step>
                <Step>
                    <StepLabel icon={<WatchLaterIcon className="custom-icon"/>}>Horario</StepLabel>
                </Step>
                <Step>
                    <StepLabel icon={<FactCheckRoundedIcon className="custom-icon"/>}>Resumen</StepLabel>
                </Step>
            </Stepper>
        )}
        </>
    );
};

export default StepperComponent;