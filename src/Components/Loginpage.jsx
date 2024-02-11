import {ErrorMessage, Formik, Field} from "formik"
import img1 from "./welcome back.jpeg";
import * as Yup from "yup";


function LoginPage(){
  const loginSchema= Yup.object().shape(
    {
      email: Yup.string().email("Invalid Email Address").required("Required"),
      password: Yup.string().min(8,"Too Short!").max(70,"Too long!").required("Required"),
    }
  )
    return(
      <div className="main">
        <h3>Welcom back</h3>
        <p className="sign-in-to">Sign in to continue</p>
       <div>  <img src={img1}/></div>
      
  <div className="formedit">
        <Formik initialValues={{email:"", password:""}} 
        onSubmit={(values,{setSubmitting})=>{
          console.log(values);
          setSubmitting(false);
        }}
        validationSchema={loginSchema}
        >
          {({values,errors,touched,handleChange, handleBlur, handleSubmit, isSubmitting})=>(
  
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">E-mail</label><br/>
            <input  className="input-box" name="email" 
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            />
            {touched.email && errors.email}
             
          </div>
          <div>
            <label htmlFor="password">Password</label><br/>
            <input className="input-box" name="password" 
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            />
            {touched.password && errors.password}
  
          </div>
          <div>
  
          <label><input type="checkbox"/>Remember me</label>
          </div>
  
          <button  className="login-box" type="submit" disabled={isSubmitting}>Login</button>
  
          <div className="forgot-page">
          <pre>  <a href="login">🗝️ login with email  |</a> <a href="forgot">🔒Forgot your password?</a></pre>
          </div>
  
          <div className="register-now">
            <p>Don't have an account? <a href="register">Register Now</a></p>
          </div>
  
        </form>
    )}
        </Formik>
  
        </div>
      
      
      </div>
    )
  }
  
  export default LoginPage