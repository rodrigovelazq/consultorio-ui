import TableFooter from "@material-ui/core/TableFooter";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import React from "react";
import PropTypes from "prop-types";
import DataTablePaginationActions from "./DataTablePaginationActions";

DataTableFooter.propTypes = {
    rowsPerPage: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    handleChangePage: PropTypes.func.isRequired,
    handleChangeRowsPerPage: PropTypes.func.isRequired
};

export default function DataTableFooter(props) {
    const {count, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage} = props;
    return (<TableFooter>
        <TableRow>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25, {label: 'All', value: -1}]}
                colSpan={3}
                count={count}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                    inputProps: {'aria-label': 'rows per page'},
                    native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={DataTablePaginationActions}
            />
        </TableRow>
    </TableFooter>)
}