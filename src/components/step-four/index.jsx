import { useCallback, useEffect, useState } from "react";

// Style
import "./style.scss";

// Components
import Header from "../global/Header";

// Hooks
import { useCart } from "../../hooks/useCart";

function StepFour({ setCurrentStep }) {
   const { cart, setCart } = useCart();
   const [total, setTotal] = useState();
   const { duration } = cart.order;

   useEffect(() => {
      const optionPrice = cart.order.priceCents;
      let servicesPrice = 0;
      cart.services.forEach((service) => {
         servicesPrice += service.priceCents;
      });
      setTotal((optionPrice + servicesPrice) / 100);
   }, []);

   return (
      <>
         <div className="step-four">
            <Header
               title="Finishing up"
               subtitle="Double-check everything looks OK before confirming"
            />
            <div className="order-container">
               <div className="summary">
                  <div className="option-ordered">
                     <div className="option">
                        <h4>{`${cart.order.name} (${
                           duration === "mo" ? "Monthly" : "Yearly"
                        })`}</h4>
                        <p
                           onClick={() => setCurrentStep(2)}
                           className="change-option-link"
                        >
                           Cahnge
                        </p>
                     </div>
                     <h4 className="price">
                        ${cart.order.priceCents / 100}/{duration}
                     </h4>
                  </div>

                  <div className="services-container">
                     {cart.services.map((service, ind) => {
                        return (
                           <div key={ind} className="service">
                              <p className="name">{service.name}</p>
                              <p className="service-price">
                                 +${service.priceCents / 100}/{duration}
                              </p>
                           </div>
                        );
                     })}
                  </div>
               </div>
               <div className="total">
                  <p>
                     {`Total (per ${
                        duration === "mo" ? "month" : "year"
                     })`}
                  </p>
                  <h3>
                     ${total}/{duration}
                  </h3>
               </div>
            </div>
            <div className="btn-container">
               <button
                  onClick={() => setCurrentStep((pre) => pre - 1)}
                  className="pre-step"
               >
                  Go Back
               </button>
               <button
                  type="submit"
                  onClick={() => {
                     setCurrentStep((pre) => pre + 1);
                     setCart((pre) => {
                        return {
                           ...pre,
                           totalPrice: total,
                        };
                     });

                     // handle API send data
                     // axios.post(..., {cart})
                  }}
                  className="next-step"
               >
                  Confirm
               </button>
            </div>
         </div>
      </>
   );
}

export default StepFour;
