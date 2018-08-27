import React from 'react';
import MenuDrawer from 'src/components/utils/MenuDrawer';
import Login from 'src/components/login/Login';
import { connect } from 'react-redux';

class App extends React.Component {
  
  render() {
    return (
      <div>
        {this.props.item.id ? <MenuDrawer/> : <Login/>}
      </div>
    )
  }
}

const mapStateToProps = state  => ({
  item: state.login.form.item
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)((App));

