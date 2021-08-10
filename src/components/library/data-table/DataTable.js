import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import DataTableHead from "./DataTableHead";
import DataTableBody from "./DataTableBody";
import DataTableToolbar from "./DataTableToolbar";
import DataTableFooter from "./DataTableFooter";


const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 500,
    },
}));

/*function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}*/

DataTable.propTypes = {
    rows: PropTypes.array.isRequired,
    rowSettings: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    setRowsPerPage: PropTypes.func.isRequired,
    order: PropTypes.string.isRequired,
    onOrderChange: PropTypes.func.isRequired,
    orderBy: PropTypes.string.isRequired,
    filter: PropTypes.string,
    setFilter: PropTypes.func,
    count: PropTypes.number.isRequired,
};

export default function DataTable(props) {
    const classes = useStyles();
    const {
        rows,
        rowSettings,
        page,
        onPageChange,
        rowsPerPage,
        setRowsPerPage,
        order,
        orderBy,
        onOrderChange,
        filter,
        setFilter,
        count
    } = props;

    const handleChangePage = (event, newPage) => {
        onPageChange(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        onPageChange(0);
    };

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        onOrderChange(isAsc ? 'desc' : 'asc', property);
    };

    return (
        <React.Fragment>
            <DataTableToolbar filter={filter} setFilter={setFilter}/>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="custom pagination table">
                    <DataTableHead
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                        rowCount={count}
                        rowSettings={rowSettings}
                    />
                    <DataTableBody
                        rows={rows}
                        rowSettings={rowSettings}/>
                    <DataTableFooter
                        count={count}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        handleChangePage={handleChangePage}
                        handleChangeRowsPerPage={handleChangeRowsPerPage}/>
                </Table>
            </TableContainer>
        </React.Fragment>
    );
}
