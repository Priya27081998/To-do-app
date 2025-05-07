import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Container, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(6, 'Must be at least 6 characters').required('Required')
    }),
    onSubmit: (values) => {
      // Dummy credentials check
      if (values.email === 'bpriyavsb98@gmail.com' && values.password === '123456') {
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/dashboard');
      } else {
        alert('Invalid credentials');
      }
    }
  });

  return (
    <Container maxWidth="sm" sx={{ mt: 8, mb: 4 , p: 4, borderRadius: 2, boxShadow: 3 ,border: '1px solid #ccc',marginLeft: '400px',backgroundColor:'white'}}>
      <Typography variant="h5" gutterBottom sx={{ mb: 2,textAlign: 'center' ,color: 'black'}}>
        Login
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{ mb: 2 ,mt: 2,borderRadius: 2,border: '1px solid #ccc'}}
        />
        <TextField
          fullWidth
          margin="normal"
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;
