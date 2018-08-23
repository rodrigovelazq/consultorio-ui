import React from 'react';
import { Route } from 'react-router-dom';

import Usuarios from './Usuarios';
import UsuariosForm from './UsuariosForm';

const UsuariosRoute = props => (
  <div>
    <Route
      exact
      path={`${props.match.url}/`}
      component={(Usuarios)}
    />
    <Route
      exact
      path={`${props.match.url}/new`}
      component={(UsuariosForm)}
    />
    <Route
      exact
      path={`${props.match.url}/:usuarioId/edit`}
      component={(UsuariosForm)}
    />
  </div>
);

export default UsuariosRoute;
