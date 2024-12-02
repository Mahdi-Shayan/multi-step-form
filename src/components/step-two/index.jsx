// React imports
import { useEffect, useState } from "react";

// Style
import "./style.scss";

// Hooks
import { useCart } from "../../hooks/useCart";

// Data
import { options } from "../../data/data";

// Components
import Header from "../global/Header";

function StepTwo({ setCurrentStep }) {
   const { setCart } = useCart();
   const [duration, setDuration] = useState("mo");
   const [plan, setPlan] = useState({});
   const [order, setOrder] = useState({});

   useEffect(() => {
      setOrder({
         name: plan?.name,
         priceCents:
            duration === "mo" ? plan?.priceCents?.mo : plan.priceCents?.yr,
      });
   }, [duration, plan]);

   return (
      <>
         <div className="step-two">
            <Header
               title="Select your plan"
               subtitle="You have the option of monthly or yearly biling"
            />
            <div className="optons-container">
               {options?.map((option, ind) => {
                  return (
                     <div key={ind} className="option">
                        <input
                           onChange={() =>
                              setPlan({
                                 name: option.name,
                                 priceCents: option.priceCents,
                              })
                           }
                           value={plan}
                           name="plan"
                           id={option.name}
                           type="radio"
                        />
                        <label htmlFor={option.name}>
                           <div className="icon">
                              <img src={option.icon} />
                           </div>
                           <div className="description">
                              <p>{option.name}</p>
                              <small>
                                 $
                                 {duration === "mo"
                                    ? option.priceCents.mo / 100
                                    : option.priceCents.yr / 100}
                                 /{duration}
                              </small>
                           </div>
                        </label>
                     </div>
                  );
               })}
            </div>
            <div className="plan-switch">
               <h5 className={duration === "mo" ? "active" : ""}>
                  Monthly
               </h5>
               <input id="switch" type="checkbox" />
               <label
                  onClick={() =>
                     setDuration((pre) => (pre === "mo" ? "yr" : "mo"))
                  }
                  className="switch"
                  htmlFor="switch"
               ></label>
               <h5 className={duration === "yr" ? "active" : ""}>
                  Yearly
               </h5>
            </div>
            <div className="btn-container">
               <button
                  onClick={() => setCurrentStep((pre) => pre - 1)}
                  className="pre-step"
               >
                  Go Back
               </button>
               <button
                  onClick={() => {
                     setCurrentStep((pre) => pre + 1);
                     setCart(pre => {
                        return {
                           ...pre,
                           order: {
                              name: order.name,
                              duration,
                              priceCents: order.priceCents
                           }
                        }
                     })
                  }}
                  className="next-step"
                  disabled={!plan.name}
               >
                  Next Step
               </button>
            </div>
         </div>
      </>
   );
}

export default StepTwo;
