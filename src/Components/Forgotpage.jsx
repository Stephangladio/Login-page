import {ErrorMessage, Formik, Field} from "formik"


function ForgotPage(){
    return(
      <div className="main">
        <h2> Enter a new password</h2> <br/>
  
        <Formik initialValues={{email:"", newPassword:"",password:""}} 
        validate={(values)=>{
          const errors ={}
          if(!values.email){
            errors.email="Required"
          }
          else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email="Invalide email address";
          }
          else if(!values.newPassword){
            errors.newPassword = "Required";
          } else if(!values.password){
            errors.password="required"
          }
          else if(values.newPassword!==values.password){
            errors.password="password does not match"
          }
          return errors;
        }}
        onSubmit={(values,{setSubmitting})=>{
          console.log(values);
          setSubmitting(false);
        }}
        >
          {({values,handleChange, handleBlur, handleSubmit, isSubmitting})=>(
  
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">E-mail</label><br/>
            <Field className="input-box" type="email" name="email"/>
             <ErrorMessage name="email"/>
          </div>
          <div>
            <label htmlFor="newPassword">New Password</label><br/>
            <Field className="input-box" type="password" name="newPassword" />
  
            <ErrorMessage name="newPassword"/>
  
          </div>
          <div>
            <label htmlFor="password">Confirm Password</label><br/>
            <Field className="input-box" type="password" name="password" />
  
            <ErrorMessage name="password"/>
  
          </div>
  
  
  
          <button  className="login-box" type="submit" disabled={isSubmitting}>Login</button>
  
  
        </form>
    )}
        </Formik>
  
  
      
      
      </div>
    )
  }
  

  export default ForgotPage