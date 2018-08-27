import { actionTypes } from './actions';
import { scopes } from 'src/utils/constants';
import { combineReducers } from 'redux';
import formReducerForScope from 'src/helpers/reducers/form';

const login = () => {
  return (state = {item: {username: '', password: ''}}, action) => {
      switch (action.type) {
        case actionTypes.LOGIN_SUCEEDED:
          return {
            ...state,
            item: action.item
          };
      case actionTypes.LOGIN_FAILED:
          return {
            ...state
          };

      case actionTypes.LOGOUT:
          return {
            ...state
          };
      case actionTypes.LOGOUT_SUCEEDED:
          return {
            ...state,
            item: {username: '', password: ''}
          };
      case actionTypes.LOGOUT_FAILED:
          return {
            ...state
          };                
        default:
          return state;
      }
    };
}

const formInitialState = {
    item:{
      username: '',
      password: ''
  }
}

  export default combineReducers({
    form: formReducerForScope(scopes.LOGIN,formInitialState),
    login: login()
  })
