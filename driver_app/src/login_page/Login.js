import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {connect} from 'react-redux';


const styles = theme => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(2),
      },

    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },

    
  
    cssLabel: {
      color : '#eeeeee'
    },
  
    cssOutlinedInput: {
      '&$cssFocused' : {
        borderColor: `#eeeeee !important`,
        color:'#eeeeee !important',
        
      },
      color:'#eeeeee !important',
      
    },
  
    cssFocused: {
      "& $notchedOutline $cssOutlinedInput": {
        button:'focus {outline:0;}',
        borderColor: "#eeeeee",
        color:'#eeeeee !important'
      },
      color:'#eeeeee !important',
      
    },
  
    notchedOutline: {
      
      borderWidth: '2px',
      borderColor: '#eeeeee !important',
    },
    textField: {
        marginTop: '-5px',
    },
  
  });


  class ValidField extends React.Component {
    state = {
        email: '',
        password: '',

    }
  
    handleChange = event => {
        // event.preventDefault();
        this.setState({
        [event.target.name]: event.target.value,
      });
    };

    // onChangeName = () => {
    //   this.props.onChange(this.state.email)
    //   // console.log(this.state.email)
    // }

    render() {
      
      const { classes } = this.props;
      const { accounts } = this.props;
      // const passwordArray = accounts.map(account => account.password);
      // const emailArray = accounts.map(account => account.email )
      const password = accounts.map(account => account.password)
      const email = accounts.map(account => account.email)
      let link;
      if (this.state.email.match(email) && this.state.password.match(password)) {
        link = '/logged/'
      } else {
        link = '/login';
      }
      return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <form className={classes.form}>
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                    <TextField
                        id="outlined-email-input"
                        label="Email *"
                        type='email'
                        name='email'
                        autoComplete='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
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
                    <Grid item xs={12}>
                    
                    <TextField
                    id="outlined-password-input"
                    label="Hasło *"
                    type='password'
                    name='password'
                    autoComplete='current-password'
                    value={this.state.password}
                    className={classes.textField}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
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
                    <Link to={link}>
                        <div onClick={this.onChangeName} className="col-4 btn-col">
                            <span>W drogę !</span>
                        </div>
                    </Link>
                </div>
                </form>
            </div>
            
        </Container>
      );
    }
  }

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts
  }
}

  
  export default connect(mapStateToProps)(withStyles(styles)(ValidField));