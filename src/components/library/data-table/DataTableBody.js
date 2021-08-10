import React from 'react';
import PropTypes from 'prop-types';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

DataTableBody.propTypes = {
    rows: PropTypes.array.isRequired,
    rowSettings: PropTypes.array.isRequired,
};

export default function DataTableBody(props) {
    const {rows, rowSettings} = props;

    const getActionCell = (row, setting) => (
        <div>
            <Tooltip title="Edit">
                <IconButton aria-label="edit" onClick={() => setting.onEdit(row)}>
                    <EditIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
                <IconButton aria-label="delete" onClick={() => setting.onDelete(row)}>
                    <DeleteIcon/>
                </IconButton>
            </Tooltip>
        </div>
    )

    const getCellDisplay = (row, setting) => {
        if (setting.key === 'actions')
            return getActionCell(row, setting);
        else if (setting.rowDisplay)
            return setting.rowDisplay(row);
        else
            return row[setting.key];
    }

    return (
        <TableBody>
            {rows.map((row) => {
                return (<TableRow
                    hover
                    tabIndex={-1}
                    key={row.id}
                >
                    {rowSettings.map(setting =>
                        (<TableCell key={setting.key} style={{width: 160}}>
                            {
                                getCellDisplay(row, setting)
                            }
                        </TableCell>))}
                </TableRow>)
            })}
        </TableBody>
    );
}
