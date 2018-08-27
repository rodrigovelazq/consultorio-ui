import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {messageActions} from './actions';
import { connect } from 'react-redux';

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});

class Message extends React.Component {
  /*state = {
    open: false,
  };*/

  /*handleClick = () => {
    this.setState({ open: true });
  };*/

  handleClose = (event) => {
    //this.setState({ open: false });
    this.props.messageClose()
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        {/*<Button onClick={this.handleClick}>Open simple snackbar</Button>*/}
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={this.props.show}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.props.message}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}

const mapStateToProps = state  => ({
    message: state.message.message,
    show: state.message.show
})

const mapDispatchToProps = dispatch => ({
  messageClose: () => dispatch(messageActions().messageClose())
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Message));
