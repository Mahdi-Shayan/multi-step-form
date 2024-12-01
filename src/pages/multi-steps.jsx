import { useState } from "react";
import Steps from "../components/global/steps";
import StepOne from "../components/step-one";
import StepTwo from "../components/step-two";

function MultiStep() {
   const [currentStep, setCurrentStep] = useState(1)

   return (<>
      <div className="multi-steps-container">
         <div className="steps">
            <Steps currentStep={currentStep}/>
         </div>
         <div className="form-container">
            <div style={{height: '100%'}} className="forms">
               {
                  currentStep === 1 ? (
                     <StepOne setCurrentStep={setCurrentStep} />
                  )
                  : currentStep === 2 && (
                     <StepTwo setCurrentStep={setCurrentStep}/>
                  )
               }
            </div>
         </div>
      </div>
   </>);
}

export default MultiStep;