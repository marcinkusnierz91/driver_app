import React from 'react';


// import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';


import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';



import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({

  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },



  //////////////////
  cssLabel: {
    color : '#eeeeee'
  },

  cssOutlinedInput: {
    '&$cssFocused' : {
      borderColor: `#eeeeee !important`,
      color:'#eeeeee !important'
    },
    color:'#eeeeee !important'
  },

  cssFocused: {
    "& $notchedOutline $cssOutlinedInput": {
      borderColor: "#eeeeee",
      color:'#eeeeee !important'
    },
    color:'#eeeeee !important'
  },

  notchedOutline: {
      
    borderWidth: '2px',
    borderColor: '#eeeeee !important',
  },
  link: {
      color: '#eeeeee',
      textDecoration: 'none',
      fontFamily: "\"Open-sans\", sans-serif",
      fontSize: '14px',
      marginRight: '4px',

  }
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      
      <div className={classes.paper}>
        
        
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Imię"
                autoFocus
                InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                    
                  }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Nazwisko"
                name="lastName"
                autoComplete="lname"
                InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                    
                  }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Adres email"
                name="email"
                autoComplete="email"
                InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                    
                  }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Hasło"
                type="password"
                id="password"
                autoComplete="current-password"
                InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                    
                  }}
              />
            </Grid>
          </Grid>
                <div className="row btn-row">
                    <Link to='/logged/'>
                        <div className="col-4 btn-col">
                            <span>Zarejestruj się</span>
                        </div>
                    </Link>
                </div>
          <Grid container justify="flex-end">
            <Grid item>
            <br/>
              <Link to="/login" variant="body2" className={classes.link}>
                Masz już konto? Zaloguj się
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}