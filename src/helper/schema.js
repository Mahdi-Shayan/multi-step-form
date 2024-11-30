import * as yup from "yup";

export const schema = yup.object().shape({
   name: yup.string().min(4).required("This field is required"),
   email: yup
      .string()
      .email("Please enter valid email")
      .required("This field is required"),
   phone: yup.string().min(11).required("This field is required"),
});
