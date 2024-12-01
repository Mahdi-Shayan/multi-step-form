import { useFormik } from "formik";
import Header from "../global/Header";
import { schema } from "../../helper/schema";

// Style
import "./style.scss";

function StepOne({ setCurrentStep }) {
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
                     style={{
                        borderColor:
                           errors?.name && touched.name
                              ? "hsl(354, 84%, 57%)"
                              : "hsl(229, 24%, 87%)",
                     }}
                     name="name"
                     type="text"
                     placeholder="e.g. Stephen King"
                     value={values.name}
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
                     value={values.email}
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
                     value={values.phone}
                     onChange={handleChange}
                     onBlur={handleBlur}
                  />
               </label>
               <div className="btn-container">
                  <button
                     onClick={() => setCurrentStep((pre) => pre + 1)}
                     disabled={errors.email || errors.name || errors.phone}
                     type="submit"
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
