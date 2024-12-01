import "./style.scss";

function Steps({ currentStep }) {
   return (
      <>
         <ul>
            <li>
               <div
                  className={`step-number ${
                     currentStep === 1 ? "active" : ""
                  }`}
               >
                  1
               </div>
               <div>
                  <p>STEP 1</p>
                  <h4>YOUR INFO</h4>
               </div>
            </li>
            <li>
               <div
                  className={`step-number ${
                     currentStep === 2 ? "active" : ""
                  }`}
               >
                  2
               </div>
               <div>
                  <p>STEP 2</p>
                  <h4>SELELCT PLAN</h4>
               </div>
            </li>
            <li>
               <div
                  className={`step-number ${
                     currentStep === 3 ? "active" : ""
                  }`}
               >
                  3
               </div>
               <div>
                  <p>STEP 3</p>
                  <h4>ADD-ONS</h4>
               </div>
            </li>
            <li>
               <div
                  className={`step-number ${
                     currentStep === 4 ? "active" : ""
                  }`}
               >
                  4
               </div>
               <div>
                  <p>STEP 4</p>
                  <h4>SUMMARY</h4>
               </div>
            </li>
         </ul>
      </>
   );
}

export default Steps;
