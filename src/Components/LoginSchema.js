import * as Yup from "yup";

const loginSchema = Yup.object().shape(
    {
      email: Yup.string().email("Invalid Email Address").required("Required"),
      password: Yup.string().min(8, "Too Short!").max(70, "Too long!").required("Required"),
    })

export {loginSchema}