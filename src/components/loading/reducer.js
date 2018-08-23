import { actionTypes } from './actions';

export default function loading (state = {loading: false}, action){
    switch (action.type) {
      case actionTypes.LOADING_SHOW:
        return {
          ...state,
          loading: true
        };
      case actionTypes.LOADING_CLOSE:
        return {
          ...state,
          loading: false
        };
      default:
        return state;
    }
  };
