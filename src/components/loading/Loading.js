import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { connect } from 'react-redux';
const styles = {
  root: {
    flexGrow: 1,
  },
};

class Loading extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {this.props.loading && <LinearProgress />}
      </div>
  )};
}


const mapStateToProps = state  => ({
    loading: state.loading.loading
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Loading));
