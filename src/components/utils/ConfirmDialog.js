import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';

class ConfirmDialog extends React.Component {
  render() {
    const { onAccept,onCancel,...other } = this.props;
    return (
      <Dialog
        {...other}
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth="xs"
        aria-labelledby="confirmation-dialog-title">
        <DialogTitle id="confirmation-dialog-title">{'Desea Eliminar?'}</DialogTitle>
        <DialogActions>
          <Button onClick={() => onCancel()} color="primary">Cancel</Button>
          <Button onClick={() => onAccept()} color="primary">Ok</Button>
        </DialogActions>
      </Dialog>)
    }
  }

  export default ConfirmDialog;
