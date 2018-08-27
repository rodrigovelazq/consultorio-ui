import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import * as loginActions from './actions';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import { scopes } from 'src/utils/constants';
import { formDispatchesForScope } from 'src/helpers/actions/form';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '50%',
  },
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing.unit,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    width: "100%",
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
});

class Login extends React.Component {
  state = {
      showPassword: false,
      };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes } = this.props;
    console.log(JSON.stringify(this.props));
    return (
      <div className={classes.root}>
        <form className={classes.container} noValidate autoComplete="off" 
         alignItems="center" justify="center">
           <Paper className={classes.paper} >
               <Typography variant="title" gutterBottom>
                 {'Login'}
               </Typography>
               <Grid container spacing={24}>
                 <Grid item md={12} xs={12}>
                   <TextField
                     label="Username"
                     value={this.props.item.username}
                     onChange={event => this.props.formInputChanged('username', event.target.value)}
                     className={classes.textField}
                     margin="normal"/>
                 </Grid>
                 <Grid item md={12} xs={12}>
                   <FormControl className={classNames(classes.margin, classes.textField)}>
                     <InputLabel htmlFor="adornment-password">Password</InputLabel>
                     <Input
                       id="adornment-password"
                       type={this.state.showPassword ? 'text' : 'password'}
                       value={this.props.item.password}
                       onChange={event => this.props.formInputChanged('password', event.target.value)}
                       endAdornment={
                         <InputAdornment position="end">
                           <IconButton
                             aria-label="Toggle password visibility"
                             onClick={this.handleClickShowPassword}
                             onMouseDown={this.handleMouseDownPassword}>
                             {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                           </IconButton>
                         </InputAdornment>
                       }/>
                   </FormControl>
                 </Grid>

                <Grid item md={12} xs={12}>
                  <Button
                    variant="contained"
                     className={classes.button}
                    color="primary"
                    onClick={_ => {this.props.login(this.props.item);}}>Login</Button>
                </Grid>
               </Grid>
            </Paper>
             </form>
         </div>
  )};
}


const mapStateToProps = state  => ({
    item: state.login.form.item
})

const mapDispatchToProps = dispatch => ({
    login: (item) => dispatch(loginActions.login(item)),
    ...formDispatchesForScope(scopes.LOGIN, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login));
