import { Formik } from "formik"
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Card, CardContent, Checkbox, Grid, Typography } from "@mui/material";
import { loginSchema } from "./LoginSchema";
import Link from '@mui/material/Link';
import VpnKey from "@mui/icons-material/VpnKey";
import LockIcon from '@mui/icons-material/Lock';
import "../../src/index.css"
import { useState } from "react";
import img1 from "./welcome back.jpeg"
import { InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';




function LoginPage() {

  const [showPassword, setShowPassword] = useState(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));





  return (
    <Box className="box-container" >
      <Formik initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
        validationSchema={loginSchema}>
        {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <Card id="card">

              <img src={img1} className="img-container" />
              <Typography id="welcomeback">
                Welcome back!
              </Typography>
              <Typography id="subtitle">
                Sign in to continue
              </Typography>
              <CardContent>

                <Grid container spacing={1}>
                  <Typography id="email">E-mail</Typography>
                  <Grid xs={12}>
                    <TextField
                      variant="outlined"
                      type="email"
                      name="email"
                      className="email-textfield"
                      fullWidth
                      InputProps={{ style: { color: "white" } }} // Set the text color here
                      onChange={handleChange}
                      size="small"
                      value={values.email}
                    />
                    <Typography variant="p" color={"white"}> {touched.email && errors.email}</Typography>
                  </Grid>
                  <Typography id="password">Password</Typography>
                  <Grid xs={12}>
                    <TextField
                      variant="outlined"
                      type={showPassword ? 'text' : 'password'}
                      className="password-textfield"
                      name="password"
                      fullWidth
                      disableRipple
                      InputProps={{
                        style: { color: 'white' },
                        endAdornment: (
                          <InputAdornment position="end" display="none">
                            <IconButton
                              onClick={() => setShowPassword(!showPassword)}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff style={{ color: "gray" }} /> : <Visibility style={{ color: "gray" }} />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      onChange={handleChange}
                      size="small"
                      value={values.password}
                    />
                    <Typography variant="p" color={"white"}> {touched.password && errors.password}</Typography>
                  </Grid>
                  <Typography sx={{ color: "white" }} >   <Checkbox disableRipple sx={{
                    '&:hover': { bgcolor: 'transparant' },
                    color: "green", paddingLeft: "0",
                    borderRadius: '10px',
                    display: "inline-block",
                  }} />  Remember me</Typography>
                  <Grid xs={12}>
                    <Button variant="contained"
                      type="submit"
                      fullWidth
                      disabled={isSubmitting}
                      disableRipple
                      sx={{
                        backgroundColor: "rgb(32, 238, 17)",
                        textTransform: "capitalize", "&:hover": { backgroundColor: "rgb(32, 238, 17)" }
                      }}>Log in</Button>
                  </Grid>
                  <div>
                  <Typography id="login-forgot">
                    <Link id="login-with-email">
                      <VpnKey id="vpnkey" /> Login with email </Link>|
                    <Link id="forgot-password">
                      <LockIcon id="lock-icon"/>Forgot your password?</Link>
                  </Typography>
                  </div>

                </Grid>
              </CardContent>



            </Card>
            <Typography id="donot-have-account">Dont't have an account?
              <Link style={{
                color: "rgb(32, 238, 17)",
                textDecoration: "none",
                padding: "5px",
                marginLeft: "10px",
                cursor: "pointer"
              }}>Register Now</Link></Typography>

          </form>
        )}
      </Formik>


    </Box>

  )
}




/*function LoginPage(){
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
          <pre>  <a href="loginwithemail">🗝️ login with email  |</a> <a href="forgot">🔒Forgot your password?</a></pre>
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
              <img src={img1} width={450} px className="img-container"/>

     <Typography variant="h6" className="welcome"
                sx={{
                  position: "absolute",
                  top: "12%",
                  left: "45%",
                  color: "white",
                }}>Welcome back!</Typography>
              <Typography variant="subtitle2" className="subtitle"
                sx={{
                  position: "absolute",
                  top: "18%",
                  left: "47%",
                  color: "white",
                  fontSize: "11px"
                }}>Sign in to continue</Typography>

   sx={{ maxWidth: isSmallScreen ? '100%' : 450, margin: '10% auto', }}
              
   
    <Grid>
                    <Typography sx={{
                      color: "white", marginTop: "30px",
                      marginLeft: "40px", fontSize: "15px",
                      padding: "10px"
                    }}>
                      <Link sx={{
                        color: "white", textDecoration: "none",
                        padding: "10px", marginRight: "10px", cursor: "pointer",
                      }}>
                        <VpnKey sx={{ fontSize: "15px", }} /> Login with email</Link>|
                      <Link sx={{
                        color: "white", textDecoration: "none",
                        padding: "5px", marginLeft: "5px", cursor: "pointer"
                      }}><LockIcon sx={{ fontSize: "15px", marginRight: "5px" }} />Forgot your password?</Link>
                    </Typography>
                  </Grid>
   
   */

export default LoginPage