import StepOne from "../components/step-one";

function MultiStep() {
   return (<>
      <div className="multi-steps-container">
         <div className="steps">
            
         </div>
         <div className="form-container">
            <div className="forms">
               <StepOne />
            </div>
            <div className="btn-container"></div>
         </div>
      </div>
   </>);
}

export default MultiStep;