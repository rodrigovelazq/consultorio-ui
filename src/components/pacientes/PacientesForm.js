import React, {useEffect} from 'react';
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
import {Link, useHistory} from "react-router-dom";
import {createPaciente, getPaciente, updatePaciente} from "./services";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function PacientesForm(props) {
    const [paciente, setPaciente] = React.useState({
        fecha_nacimiento: new Date(),
        nombre: '',
        apellido: '',
        telefono: '',
        cedula: ''
    })
    const classes = useStyles();
    const {params: {id}} = props.match;
    const history = useHistory();

    useEffect(() => {
        console.log(JSON.stringify(props.match));
        if (id)
            getPaciente(id).then(function (response) {
                setPaciente(response.data);
            })
                .catch(function (error) {
                    console.log(error);
                });
    }, [id]);

    const onChangeField = (field, event) => {
        setPaciente({
            ...paciente,
            [field]: event.target.value
        });
    }

    const save = () => {
        if(id)
            updatePaciente(id, paciente)
                .then(function (response) {
                    history.push('/pacientes');
                })
                .catch(function (error) {
                    console.log(error);
                });
        else
            createPaciente(paciente)
                .then(function (response) {
                    history.push('/pacientes');
                })
                .catch(function (error) {
                    console.log(error);
                });
    }

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
                        value={paciente['nombre']}
                        onChange={(event) => onChangeField("nombre", event)}
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
                        value={paciente['apellido']}
                        onChange={(event) => onChangeField("apellido", event)}
                        fullWidth
                        autoComplete="family-name"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="cedula"
                        name="cedula"
                        label="Cédula"
                        value={paciente['cedula']}
                        onChange={(event) => onChangeField("cedula", event)}
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
                            value={paciente['fecha_nacimiento']}
                            onChange={(event) => onChangeField("fecha_nacimiento", event)}
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
                        value={paciente['telefono']}
                        onChange={(event) => onChangeField("telefono", event)}
                        fullWidth
                        autoComplete="shipping address-line2"
                    />
                </Grid>
                <Grid item xs={12} className={classes.root}>
                    <Button variant="contained" color="primary" onClick={() => save()}>
                        Guardar
                    </Button>
                    <Button variant="contained" component={Link} to="/pacientes">
                        Cancelar
                    </Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}