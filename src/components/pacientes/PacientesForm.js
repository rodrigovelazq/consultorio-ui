import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function PacientesForm() {
    const [fechaNacimiento, setFechaNacimiento] = React.useState(new Date());
    const [nombre, setNombre] = React.useState('');
    const [apellido, setApellido] = React.useState('');
    const [telefono, setTelefono] = React.useState('');
    const [cedula, setCedula] = React.useState('');
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Registro del paciente
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="nombre"
                        name="nombre"
                        label="Nombre"
                        value={nombre}
                        onChange={value => setNombre(value)}
                        fullWidth
                        autoComplete="given-name"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="apellido"
                        name="apellido"
                        label="Apellido"
                        value={apellido}
                        onChange={value => setApellido(value)}
                        fullWidth
                        autoComplete="family-name"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="cedula"
                        name="cedula"
                        label="Cédula"
                        value={cedula}
                        onChange={value => setCedula(value)}
                        fullWidth
                        autoComplete="shipping address-line1"
                    />
                </Grid>
                <Grid item xs={12}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Fecha de nacimiento"
                            value={fechaNacimiento}
                            onChange={(value) => setFechaNacimiento(value)}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="telefono"
                        name="telefono"
                        label="Teléfono"
                        value={telefono}
                        onChange={value => setTelefono(value)}
                        fullWidth
                        autoComplete="shipping address-line2"
                    />
                </Grid>
                <Grid item xs={12} className={classes.root}>
                    <Button variant="contained" color="primary">
                        Guardar
                    </Button>
                    <Button variant="contained" component={Link} to="/">
                        Cancelar
                    </Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}