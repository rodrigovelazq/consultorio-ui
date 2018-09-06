import React from 'react';
import MenuDrawer from 'src/components/utils/MenuDrawer';
import Login from 'src/components/login/Login';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'

class App extends React.Component {
  
  render() {
    return (
      <div>
        {this.props.isLoggedIn ? <MenuDrawer /> : <Route path="/" component={Login} />}
      </div>
    )
  }
}

const mapStateToProps = state  => ({
  isLoggedIn: state.login.isLoggedIn
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)((App));

