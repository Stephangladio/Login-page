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
import {  InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';




function LoginPage() {
 
  const [showPassword, setShowPassword] = useState(false);




  return (
    <Box sx={{ maxWidth: 450, margin: "0 auto", }}>
      <Formik initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
        validationSchema={loginSchema}>
        {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <Card sx={{ maxWidth:450, margin: "50px auto", backgroundColor: " #201f30",}}>
              <div className="img" style={{textAlign:"center",}}>
                <br/>
               <Typography variant="span" style={{color:"white"}}>Welcome back!</Typography><br/>
               <Typography variant="span" style={{color:"white", fontSize:"11px"}}>Sign in to continue</Typography>
               
              </div>
         
              
              <CardContent>

                <Grid container spacing={1}>
                  <Typography sx={{ color: "white" }}>E-mail</Typography>
                  <Grid xs={12}>
                    <TextField
                      variant="outlined"
                      type="email"
                      name="email"
                      className="email"
                      
                      fullWidth
                      style={{
                        backgroundColor: "rgb(8, 4, 19)",
                        marginTop: "10px",
                      }}
                      InputProps={{ style: { color: "white" } }} // Set the text color here

                   

                      onChange={handleChange}
                      size="small"
                      value={values.email}
                    />
                    <Typography variant="p" color={"red"}> {touched.email && errors.email}</Typography>
                  </Grid>
                  <Typography sx={{ color: "white", marginTop: "5px" }}>Password</Typography>
                  <Grid xs={12}>
                    <TextField
                      variant="outlined"
                      type={showPassword ? 'text' : 'password'}

                      name="password"
                      fullWidth
                      disableRipple
                      style={{
                        color: "white",
                        backgroundColor: "rgb(8, 4, 19)",
                        marginTop: "10px",
                      }}
                    
                      InputProps={{
                        style: { color: 'white' },
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                               
                                    onClick={() => setShowPassword(!showPassword)}
                                    edge="end"
                                >
                                    {showPassword ?  <VisibilityOff style={{color:"gray"}}/> : <Visibility style={{color:"gray"}} />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    

                      onChange={handleChange}
                      size="small"
                      value={values.password}
                    />
                    <Typography variant="p" color={"red"}> {touched.password && errors.password}</Typography>
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
                </Grid>
              </CardContent>



            </Card>
            <Typography sx={{ textAlign: "center", color: "white" }}>Dont't have an account?
              <Link sx={{
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







export default LoginPage