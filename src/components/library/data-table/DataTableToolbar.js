import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useToolbarStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
        width: '100%',
    },
    title: {
        flex: '1 1 100%',
    },
}));

DataTableToolbar.propTypes = {
    filter: PropTypes.string,
    setFilter: PropTypes.func,
};

export default function DataTableToolbar(props) {
    const classes = useToolbarStyles();
    const {filter, setFilter} = props;

    return (
        <Toolbar className={classes.root}>
            <Typography className={classes.title} variant="h6" id="tableTitle" component="div">Pacientes</Typography>
            {filter !== undefined && setFilter !== undefined && <TextField id="standard-basic" label="Filtrar" value={filter} onChange={(value) => setFilter(value)}/>}
        </Toolbar>
    );
};