import { Stepper, Step, StepLabel, Grid } from '@material-ui/core';
import '../styles/Card.css';

const StepperComponent = ({ activeStep }: { activeStep: number }) => {
    return(
        <Stepper 
        style={{ background: 'none' }}
        activeStep={activeStep}
        >
            <Step>
            <StepLabel>Cantidad de Personas</StepLabel>
            </Step>
            <Step>
            <StepLabel>Fecha</StepLabel>
            </Step>
            <Step>
            <StepLabel>Servicio</StepLabel>
            </Step>
            <Step>
            <StepLabel>Horario</StepLabel>
            </Step>
            <Step>
            <StepLabel>Resumen</StepLabel>
            </Step>
        </Stepper>
    );
};

export default StepperComponent