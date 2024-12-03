import { useFormik } from "formik";
import { useEffect, useRef, useState } from "react";

// Components
import Header from "../global/Header";

// Helpers
import { schema } from "../../helper/schema";

// Hooks
import { useCart } from "../../hooks/useCart";

// Style
import "./style.scss";

function StepOne({ setCurrentStep }) {
   const { setCart } = useCart();

   const {
      values,
      errors,
      touched,
      handleBlur,
      handleChange,
      handleSubmit,
   } = useFormik({
      initialValues: {
         name: "",
         email: "",
         phone: "",
      },
      validationSchema: schema,
   });

   const { name, email, phone } = values;
   const NameREF = useRef();

   useEffect(() => {
      NameREF.current.focus();
   }, []);

   return (
      <>
         <div className="step-one">
            <Header
               title="Personal info"
               subtitle="Please Provide your name, email adress, and phone number"
            />
            <form onSubmit={handleSubmit}>
               <label>
                  <div className="txt">
                     <span>Name</span>
                     {errors?.name && touched.name && (
                        <p className="err">{errors?.name}</p>
                     )}
                  </div>
                  <input
                     ref={NameREF}
                     style={{
                        borderColor:
                           errors?.name && touched.name
                              ? "hsl(354, 84%, 57%)"
                              : "hsl(229, 24%, 87%)",
                     }}
                     name="name"
                     type="text"
                     placeholder="e.g. Stephen King"
                     value={name}
                     onChange={handleChange}
                     onBlur={handleBlur}
                  />
               </label>
               <label>
                  <div className="txt">
                     <span>Email Address</span>
                     {errors?.email && touched.email && (
                        <p className="err">{errors?.email}</p>
                     )}
                  </div>
                  <input
                     style={{
                        borderColor:
                           errors?.email && touched.email
                              ? "hsl(354, 84%, 57%)"
                              : "hsl(229, 24%, 87%)",
                     }}
                     name="email"
                     type="email"
                     placeholder="e.g. StephenKing@lorem.com"
                     value={email}
                     onChange={handleChange}
                     onBlur={handleBlur}
                  />
               </label>
               <label>
                  <div className="txt">
                     <span>Phone Number</span>
                     {errors?.phone && touched.phone && (
                        <p className="err">{errors?.phone}</p>
                     )}
                  </div>
                  <input
                     style={{
                        borderColor:
                           errors?.phone && touched.phone
                              ? "hsl(354, 84%, 57%)"
                              : "hsl(229, 24%, 87%)",
                     }}
                     name="phone"
                     type="text"
                     placeholder="e.g. 09123456789"
                     value={phone}
                     onChange={handleChange}
                     onBlur={handleBlur}
                  />
               </label>
               <div className="btn-container">
                  <button
                     className="next-step"
                     onClick={() => {
                        setCurrentStep((pre) => pre + 1);
                        setCart(
                           {
                              info: {
                                 name,
                                 email,
                                 phone,
                              },
                           },
                        );
                     }}
                     disabled={errors.name || errors.email || errors.phone}
                  >
                     Next Step
                  </button>
               </div>
            </form>
         </div>
      </>
   );
}

export default StepOne;
