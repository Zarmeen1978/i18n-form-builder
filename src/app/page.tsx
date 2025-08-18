"use client";
import { useState } from "react";
import Step1 from "./form/step1";
import Step2 from "./form/step2";
import Step3 from "./form/step3";
import { Stepper, Step, StepLabel, Container, Box } from "@mui/material";
import LanguageSwitcher from "./components/LanguageSwitcher";

const steps = ["Step 1", "Step 2", "Step 3"];

export default function Page() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Container>
      <Box display="flex" justifyContent="flex-end" mt={2}>
        <LanguageSwitcher />
      </Box>

      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === 0 && <Step1 onNext={() => setActiveStep(1)} />}
      {activeStep === 1 && (
        <Step2 onNext={() => setActiveStep(2)} onBack={() => setActiveStep(0)} />
      )}
      {activeStep === 2 && <Step3 onBack={() => setActiveStep(1)} />}
    </Container>
  );
}
