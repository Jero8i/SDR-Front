import { Stepper, Step, StepLabel, Grid } from '@material-ui/core';

const StepperComponent = ({ activeStep }: { activeStep: number }) => {
    return(
        <Stepper activeStep={activeStep}>
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