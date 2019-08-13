import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  
    cssLabel: {
      color : '#eeeeee'
    },
  
    cssOutlinedInput: {
      '&$cssFocused' : {
        borderColor: `green !important`,
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
  
  });


  class ValidField extends React.Component {
    state = {
        email: '',
        password: '',

    }
  
    handleChange = event => {
        this.setState({
        [event.target.name]: event.target.value,
      });
    };
  
    render() {
      const { classes } = this.props;
  
      return (
        <form className={classes.container}>
          <TextField
            id="outlined-email-input"
            label="Email"
            type='email'
            name='email'
            autoComplete='email'
            className={classes.textField}
            value={this.state.email}
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
          /><TextField
          id="outlined-password-input"
          label="Hasło"
          type='password'
          name='password'
          autoComplete='current-password'
          className={classes.textField}
          value={this.state.password}
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
        </form>
      );
    }
  }
  
  export default withStyles(styles)(ValidField);