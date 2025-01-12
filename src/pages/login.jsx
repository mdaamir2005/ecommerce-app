import { Button, TextField, Snackbar, Alert } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
  const [alertOpen, setAlertOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
const navigate = useNavigate();
  const loginValidation = yup.object({
    email: yup
      .string("Email must be a string")
      .email("Please enter a valid email address")
      .required('Email is required'),
    password: yup
     
    .string()
    .required('Please Enter your password')
    .min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol'),
  });

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: loginValidation,
    onSubmit: (values) => {
      if (!values.email || !values.password) {
        setErrorMessage("Please fill in all fields");
        setAlertOpen(true);
      } else {
        console.log(values.email, values.password);
        navigate("/products")
      }
    }
  });

  const alertClose = () => {
    setAlertOpen(false);
  };

  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'1000px'}}>
        <div style={{width:'30%',height:'400px',padding:'30px',borderRadius:'5px',boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
      <h1>Login</h1>
      <form onSubmit={loginFormik.handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px'}}>
        
          <TextField
            name='email'
            value={loginFormik.values.email}
            onChange={loginFormik.handleChange}
            id="standard-basic"
            label="Email"
            variant="standard"
            error={loginFormik.touched.email && Boolean(loginFormik.errors.email)}
            helperText={loginFormik.touched.email && loginFormik.errors.email}
            fullWidth
          />

          {/* Password Field */}
          <TextField
            name='password'
            type="password"
            value={loginFormik.values.password}
            onChange={loginFormik.handleChange}
            id="standard-basic"
            label="Password"
            variant="standard"
            error={loginFormik.touched.password && Boolean(loginFormik.errors.password)}
            helperText={loginFormik.touched.password && loginFormik.errors.password}
            fullWidth
          />

          {/* Submit Button */}
          <Button variant="contained" type="submit" fullWidth >
            Login
          </Button>
        </div>
      </form>
      </div>
      {/* Snackbar for error messages */}
      <Snackbar open={alertOpen} autoHideDuration={3000} onClose={alertClose} anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}>
        <Alert onClose={alertClose} severity="error" sx={{ width: '100%' }}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Login;
