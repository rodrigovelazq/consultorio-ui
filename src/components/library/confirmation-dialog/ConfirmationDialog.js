import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import {Typography} from "@material-ui/core";

ConfirmationDialog.propTypes = {
    onCancel: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    onAccept: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,
};

export default function ConfirmationDialog(props) {
    const {onCancel, onAccept, open, message, acceptLabel, cancelLabel} = props;

    return (
        <Dialog
            disableBackdropClick
            disableEscapeKeyDown
            maxWidth="xs"
            aria-labelledby="confirmation-dialog-title"
            open={open}
        >
            <DialogContent>
                <Typography variant={'body1'}
                            style={{fontWeight: "bold", marginBottom: 20}}
                            testannotation={"warningTotalPointsMessage"}><b>{message}</b></Typography>

            </DialogContent>
            <DialogActions>
                <Button variant="contained" autoFocus onClick={onCancel}>
                    <span>{cancelLabel ? cancelLabel : 'CANCELAR'}</span>
                </Button>
                <Button variant="contained" onClick={onAccept} testannotation={"acceptDialogButton"} data-testid={"acceptDialogButton"}>
                    <span>{acceptLabel ? acceptLabel : 'ACEPTAR'}</span>
                </Button>
            </DialogActions>
        </Dialog>
    );
}
