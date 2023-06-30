import React from "react";
import { useMultistep } from "./UseMultistep";
import { RenderStepContent } from "./components/RenderStepContent";
import StepperComponent from "./components/StepperComponent";
import { Box, Grid } from "@material-ui/core";
import "./styles/App.css";
import "./styles/Card.css";

function App() {
  const {
    activeStep,
    reservation,
    handleNext,
    handlePrev,
    handleChangeStep1,
    handleChangeStep2,
    handleChangeStep3,
    handleChangeStep4,
    handleSubmit,
  } = useMultistep();

  return (
    <div className="background">
      <Box
        justifyContent="center"
        alignItems="center"
        style={{
          backgroundColor: "rgba(254, 250, 224)",
          width: "50%",
          height: "65%",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Grid item>
          {activeStep !== -1 && <StepperComponent activeStep={activeStep} />}
        </Grid>

        <Grid item>
          {RenderStepContent({
            activeStep,
            reservation,
            handleNext,
            handlePrev,
            handleChangeStep1,
            handleChangeStep2,
            handleChangeStep3,
            handleChangeStep4,
            handleSubmit,
          })}
        </Grid>
      </Box>
    </div>
  );
}

export default App;
