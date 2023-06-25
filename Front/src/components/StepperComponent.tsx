import { Stepper, Step, StepLabel} from '@material-ui/core';
import '../styles/Card.css';
import '../styles/Stepper.css';

const StepperComponent = ({ activeStep }: { activeStep: number }) => {
    return(
        <Stepper 
        style={{ background: 'none' }}
        activeStep={activeStep}
        >
            <Step>
                <StepLabel className="custom-label">Cantidad de Personas</StepLabel>
            </Step>
            <Step>
                <StepLabel className="custom-label">Fecha</StepLabel>
            </Step>
            <Step>
                <StepLabel className="custom-label">Servicio</StepLabel>
            </Step>
            <Step>
                <StepLabel className="custom-label">Horario</StepLabel>
            </Step>
            <Step>
                <StepLabel className="custom-label">Resumen</StepLabel>
            </Step>
        </Stepper>
    );
};

export default StepperComponent