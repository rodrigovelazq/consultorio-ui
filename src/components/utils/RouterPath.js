import React from 'react'
import { Switch, Route } from 'react-router-dom'
import UsuariosRoute from 'src/components/usuarios/UsuariosRoute'

class RouterPath extends React.Component {
  render () {
    return (
        <Switch>
          <Route path="/usuarios" component={UsuariosRoute} />
        </Switch>
    )
  }
}

export default RouterPath;
