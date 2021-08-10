import PropTypes from "prop-types";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}));


DataTableHead.propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowSettings: PropTypes.array.isRequired,
};

export default function DataTableHead(props) {
    const {order, orderBy, onRequestSort, rowSettings} = props;
    const classes = useStyles();
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };


    return (
        <TableHead>
            <TableRow>
                {rowSettings.map((headCell) => (
                    <TableCell
                        key={headCell.key}
                        align={headCell.numeric ? 'right' : 'left'}
                        sortDirection={orderBy === headCell.key ? order : false}
                    >
                        {headCell.key !== 'actions' ? <TableSortLabel
                            active={orderBy === headCell.key}
                            direction={orderBy === headCell.key ? order : 'asc'}
                            onClick={createSortHandler(headCell.key)}
                        >
                            {headCell.label}
                            {orderBy === headCell.key ? (
                                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
                            ) : null}
                        </TableSortLabel> : headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}