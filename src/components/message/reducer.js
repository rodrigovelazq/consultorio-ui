import { actionTypes } from './actions';

export default function message (state = {show: false, message: ''}, action){
    switch (action.type) {
      case actionTypes.MESSAGE_SHOW:
        return {
          ...state,
          show: true,
          message: action.message
        };
      case actionTypes.MESSAGE_CLOSE:
        return {
          ...state,
          show: false
        };
      default:
        return state;
    }
  };
