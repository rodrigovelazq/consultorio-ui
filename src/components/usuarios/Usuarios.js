import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import * as usuariosActions from './actions';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import ConfirmDialog from 'src/components/utils/ConfirmDialog';

const styleSheet = theme => ({
  root: {
     width: '100%',
     marginTop: theme.spacing.unit * 3,
     overflowX: 'auto',
   },
   table: {
     minWidth: 700,
   },
   button: {
     margin: theme.spacing.unit,
   }
});

class Usuarios extends Component {
  state = {
    itemToDelete: null,
    open: false
  };

  /*constructor() {
    super();
  }

  componentDidMount() {

  }*/

  componentWillMount() {
    this.props.loadUsuarios();
  }

  render() {
    const { classes } = this.props;
   return(
      <div>
        <Button
          variant="contained"
           className={classes.btn}
          onClick={_ => {
            this.props.history.push(`${this.props.match.url}/new`);
          }}>Crear</Button>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Username</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Apellido</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.usuarioList.map(n => {
                return (
                  <TableRow key={n.id}>
                    <TableCell>{n.username}</TableCell>
                    <TableCell>{n.nombre}</TableCell>
                    <TableCell>{n.apellido}</TableCell>
                    <TableCell>{n.email}</TableCell>
                    <TableCell>
                      <Link to={`usuarios/${n.id}/edit`}
                      style={{ textDecoration: 'none' }}>
                        <Tooltip title="Editar" placement="top-start">
                          <IconButton aria-label="Edit">
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                      </Link>
                      <a style={{textDecoration: 'none'}}
                      onClick={() => this.setState({open: true, itemToDelete: n})}>
                        <Tooltip title="Eliminar" placement="top-start">
                            <IconButton aria-label="Delete">
                                <DeleteIcon/>
                            </IconButton>
                        </Tooltip>
                      </a>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <ConfirmDialog
            open={this.state.open}
            onAccept={() => {this.props.deleteUsuario(this.state.itemToDelete);
                              this.setState({open: false,itemToDelete: null});}}
            onCancel={() => this.setState({open: false,itemToDelete: null})}/>
          {/*<Button
              variant="fab"
              color="primary"
              aria-label="Add"
              className={classes.button}
              onClick={this.props.addUsuario}>
          <AddIcon />
          </Button>*/}
        </Paper>
      </div>);
    }
  }

const mapStateToProps = state  => ({
    usuarioList: state.usuarios.items.data
})

const mapDispatchToProps = dispatch => ({
    loadUsuarios: () => dispatch(usuariosActions.loadUsuarios()),
    deleteUsuario: (item) => dispatch(usuariosActions.deleteUsuario(item)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet)(Usuarios));
