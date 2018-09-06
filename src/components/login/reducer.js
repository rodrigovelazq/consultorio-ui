import { actionTypes } from './actions';

const login = () => {
  return (state = {item: {username: '', password: ''}, isLoggedIn : false}, action) => {
      switch (action.type) {
        case actionTypes.LOGIN_INPUT_CHANGED:
          const item = { ...state.item };
          item[action.field] = action.value;
          return {
            ...state,
            item
          };
        case actionTypes.LOGIN_SUCEEDED:
          return {
            ...state,
            item: action.item,
            isLoggedIn: true
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
            item: {username: '', password: ''},
            isLoggedIn: false
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

  export default login()
