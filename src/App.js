import "./index.css"

import {BrowserRouter,Route,Link,Routes} from "react-router-dom"
import ForgotPage from "../src/Components/Forgotpage"
import Register from "../src/Components/Registerpage"

import LoginPage from "../src/Components/Loginpage"






function App(){
  return(<div>

    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/forgot' element={<ForgotPage/>}></Route>
      <Route path='/register' element={<Register/>}></Route>

    </Routes>
    </BrowserRouter>
</div>
  )
}

export default App

















/*import "./index.css"
import {useState} from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"


function App() {
  const [email, setEmail]= useState("");
  const[password, setpassword]= useState("");
  return (
    <Formik
      initialValues={
        {
          email: "",
          password: ""
        }
      }
      validate={{ values }}
      onSubmit={(values, { setSubmitting }) => { setSubmitting(false); }}
    >
      {({values,errors,touched,handleChange, handleBlur, handleSubmit, isSubmitting})=>(
      <form onSubmit={handleSubmit}>
        <div className="main">
          <div className="SignUp-form">
            <h2>Sign up</h2>

            <p><label htmlFor="email">E-mail</label></p>
            <input type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}></input>
            <p>Password</p>
            <input type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}></input>


          </div>

        </div>
      </form>
)}

    </Formik>
  );
}

export default App;

*/