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

const rootReducer = combineReducers({
usuarios,message,loading
})



const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
