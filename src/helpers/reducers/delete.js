import { deleteActionTypesForScope } from 'src/helpers/actions/delete';

const defaultDeleteState = {
  open: false,
  item: null,
  loading: false,
  error: null
};

const deleteReducerForScope = scope => {
  const actionTypes = deleteActionTypesForScope(scope);
  return (state = defaultDeleteState, action) => {
    switch (action.type) {
      case actionTypes.DELETE_REQUESTED:
        return {
          ...state,
          item: action.item,
          open: true
        };
      case actionTypes.DELETE_DO_DELETE:
        return {
          ...state,
          loading: true
        };
      case actionTypes.DELETE_CANCEL:
        return {
          ...defaultDeleteState
        };
      case actionTypes.DELETE_SUCCEDED:
        return {
          ...defaultDeleteState
        };
      case actionTypes.DELETE_FAILED:
        return {
          ...state,
          loading: false,
          error: action.error
        };
      default:
        return state;
    }
  };
};

export default deleteReducerForScope;
