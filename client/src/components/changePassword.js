import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import url from '../url';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Changepassword(props) {
  const classes = useStyles();
  const token=localStorage.getItem('token')

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [confirmPassword,setConfirmPassword]=useState('')
  const [otp,setOtp]=useState('')
  const [receivedOtp,setReceivedOtp]=useState('')

  const secureAxios=axios.create(
                        {
                         baseURL:url,
                         headers:{
                          "Authorization":`bearer ${token}`
                        }
                      })


  	const changePassword=(event)=>{
  		event.preventDefault();

      if(otp!=receivedOtp){
        toast.error('Incorrect OTP',{autoClose:1000}); return;
      }

      if(confirmPassword!=password){toast("Password and Confirm password don't match",{autoClose:1000});}

  		const data={email,password};
  		secureAxios.post('changePassword',data)
      .then((response)=>{
        const body=response.data
        if(body.status==1){
          toast.success('Password was changed successfully',{autoClose:2000})

          props.history.push('/');
        }
        else toast.error('Something went wrong');
  		})
      .catch(err=>{console.log(err); toast.error('Something went wrong');});
   }



  	const forgotPassword=(event)=>{
    		event.preventDefault();
    		let data={email};
        //alert(secureAxios)
        secureAxios.post('forgotPassword',data)
        .then((response)=>{
            const body=response.data
            let receivedOtp=null;


            if(body.status==1){toast.info(body.msg,{autoClose:1000});setReceivedOtp(body.otp);}
            else toast.error("Something went wrong",{autoClose:1000});

    		 })
         .catch(err=>{console.log(err); toast.error("Something went wrong",{autoClose:1000});});
    }




  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Change password
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(evt)=>setEmail(evt.target.value)}
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={forgotPassword}
          >
            Send OTP
          </Button>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="otp"
            label="Enter OTP"
            name="otp"
            value={otp}
            onChange={(evt)=>setOtp(evt.target.value)}
            autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(evt)=>setPassword(evt.target.value)}
            autoComplete="current-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={confirmPassword}
            onChange={(evt)=>setConfirmPassword(evt.target.value)}
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={changePassword}
            className={classes.submit}
          >
            Submit
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Back to Home
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}