import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";

const useToolbarStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
        width: '100%',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    title: {
        flex: '1 1 100%',
    },
}));

DataTableToolbar.propTypes = {
    urlForm: PropTypes.string,
    tableTitle: PropTypes.string,
    filter: PropTypes.string,
    onChangeFilter: PropTypes.func,
};

export default function DataTableToolbar(props) {
    const classes = useToolbarStyles();
    const {filter, onChangeFilter, urlForm, tableTitle} = props;
    const history = useHistory();
    return (
        <Toolbar className={classes.root}>
            {tableTitle && <Typography className={classes.title} variant="h6" id="tableTitle" component="div">{tableTitle}</Typography>}
            {urlForm && <Button variant="contained" color="primary" onClick={() => history.push(urlForm)}>
                Agregar
            </Button>}
            {filter !== undefined && onChangeFilter !== undefined && <TextField id="standard-basic" label="Filtrar" value={filter} onChange={(event) => onChangeFilter(event.target.value)}/>}
        </Toolbar>
    );
};