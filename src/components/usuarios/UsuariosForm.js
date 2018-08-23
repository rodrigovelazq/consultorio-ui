import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import * as usuariosActions from './actions';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { scopes } from 'src/utils/constants';
import { formDispatchesForScope } from 'src/helpers/actions/form';
import { Redirect } from 'react-router-dom'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing.unit,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
});


class UsuariosForm extends React.Component {
  state = {
    showPassword: false,
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  componentDidMount() {
      const itemId = this.props.match.params.usuarioId;
      if(itemId){
        this.props.getUsuario(itemId);
      }
  }


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <form className={classes.container} noValidate autoComplete="off" onSubmit={_ => this.props.formSubmit()}>
           <Paper className={classes.paper}>
               <Typography variant="title" gutterBottom>
                 {this.props.item.id ? 'Actualizar Usuario' : 'Nuevo Usuario'}
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
                   <TextField
                     label="Nombre"
                     value={this.props.item.nombre}
                     onChange={event => this.props.formInputChanged('nombre', event.target.value)}
                     className={classes.textField}
                     margin="normal"/>
                 </Grid>
                 <Grid item md={12} xs={12}>
                   <TextField
                     label="Apellido"
                     value={this.props.item.apellido}
                     onChange={event => this.props.formInputChanged('apellido', event.target.value)}
                     className={classes.textField}
                     margin="normal"/>
                 </Grid>
                 {!this.props.item.id && <Grid item md={12} xs={12}>
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
                 </Grid>}
                 <Grid item md={12} xs={12}>
                   <TextField
                     label="Email"
                     value={this.props.item.email}
                     onChange={event => this.props.formInputChanged('email', event.target.value)}
                     className={classes.textField}
                     margin="normal"
                   />
                </Grid>
                <Grid item md={12} xs={12}>
                  <Button
                    variant="contained"
                     className={classes.button}
                    color="primary"
                    onClick={_ => {this.props.item.id ?
                      this.props.updateUsuario(this.props.item) :
                      this.props.addUsuario(this.props.item);
                      this.props.history.push('/usuarios');}}>Guardar</Button>
                  <Button
                    variant="contained"
                     className={classes.button}
                    onClick={_ => {
                      this.props.formCancel();
                      this.props.history.push('/usuarios');
                    }}>Cancelar</Button>
                </Grid>
               </Grid>
            </Paper>
             </form>
         </div>
    );
  }
}

const mapStateToProps = state  => ({
    item: state.usuarios.form.item
})

const mapDispatchToProps = dispatch => ({
    addUsuario: (item) => dispatch(usuariosActions.addUsuario(item)),
    updateUsuario: (item) => dispatch(usuariosActions.updateUsuario(item)),
    getUsuario: (id) => dispatch(usuariosActions.getUsuario(id)),
  ...formDispatchesForScope(scopes.USUARIOS, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UsuariosForm));
