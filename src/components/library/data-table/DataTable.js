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
    urlForm: PropTypes.string,
    tableTitle: PropTypes.string,
    onChangeFilter: PropTypes.func,
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
        onChangeFilter,
        count,
        urlForm,
        tableTitle
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
            <DataTableToolbar filter={filter} onChangeFilter={onChangeFilter} urlForm={urlForm} tableTitle={tableTitle}/>
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
