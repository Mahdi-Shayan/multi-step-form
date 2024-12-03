import { useState } from "react";

// Components
import Header from "../global/Header";

// Data
import { add_ons } from "../../data/data";

// Style
import "./style.scss";

// Contexts
import { useCart } from "../../hooks/useCart";

function StepThree({ setCurrentStep }) {
   const { cart, setCart } = useCart();
   const [selectedItem, setSelectedItem] = useState([]);

   return (
      <>
         <div className="step-three">
            <Header
               title="Pick add-ons"
               subtitle="Add-ons help enhance your gaming experince"
            />
            <div className="add-ons-container">
               {add_ons?.map((add, ind) => {
                  return (
                     <label key={ind} className="add">
                        <div className="check-input">
                           <input
                              type="checkbox"
                              name="add"
                              value={selectedItem}
                              onChange={(e) => {
                                 if (e.target.checked) {
                                    setSelectedItem((pre) => {
                                       return [
                                          ...pre,
                                          {
                                             name: add.title,
                                             priceCents:
                                                cart.order.duration ===
                                                "mo"
                                                   ? add.priceCents.mo
                                                   : add.priceCents.yr,
                                          },
                                       ];
                                    });
                                 } else {
                                    setSelectedItem(
                                       selectedItem.filter(
                                          (item) => item.name !== add.title
                                       )
                                    );
                                 }
                              }}
                           />
                        </div>
                        <div className="description">
                           <h4>{add.title}</h4>
                           <p>{add.des}</p>
                        </div>
                        <div className="price">
                           <small>
                              +$
                              {(cart.order.duration === "mo"
                                 ? add.priceCents.mo
                                 : add.priceCents.yr) / 100}
                              /{cart.order.duration}
                           </small>
                        </div>
                     </label>
                  );
               })}
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
                     setCart((pre) => {
                        return {
                           ...pre,
                           services: selectedItem,
                        };
                     });
                  }}
                  className="next-step"
                  disabled={!selectedItem.length > 0}
               >
                  Next Step
               </button>
            </div>
         </div>
      </>
   );
}

export default StepThree;
