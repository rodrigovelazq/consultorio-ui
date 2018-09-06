import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import usuarios from 'src/components/usuarios/reducer';
import message from 'src/components/message/reducer';
import loading from 'src/components/loading/reducer';
import login from 'src/components/login/reducer';
import {history} from 'src/helpers/actions/history';
import { Router } from 'react-router-dom';

const rootReducer = combineReducers({
  login,
  usuarios,
  message,
  loading
})



const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

render(
  <Provider store={store}>
    <Router history={history}>
            <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
