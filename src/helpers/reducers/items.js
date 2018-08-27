import { itemsActionTypesForScope } from 'src/helpers/actions/items';

/**
 * Estado default de items.
 */
const defaultItemsState = {
  data: [],
  /*loading: true,
  error: null,
  showError: false,
  open: false,
  itemSelected: null*/
}


const itemsReducerForScope = (scope) => {
  const actionTypes = itemsActionTypesForScope(scope);
  return (state = defaultItemsState, action) => {
    switch (action.type) {
      case actionTypes.DATA_REQUESTED:
        return {
          ...state,
          data: [],
          //loading: true,
          //error: null,
          //showError: false,
          //open:false
        };
      case actionTypes.DATA_REQUEST_SUCCEEDED:
        return {
          ...state,
          //loading: false,
          data: action.data
        };
      case actionTypes.DATA_REQUEST_FAILED:
        return {
          ...state,
          //loading: false,
          data: [],
          //error: action.error,
          //showError: true,
          //open:false
        }
      /*case actionTypes.DATA_CLEAN_ERROR:
        return {
          ...state,
          showError: false,
          error: null,
          open: false
        }
      case actionTypes.DATA_SELECTED:
        return {
          ...state,
          showError: false,
          error: null,
          open: true,
          itemSelected: action.data
        }
        case actionTypes.DATA_CANCEL:
          return {
            ...state,
            showError: false,
            error: null,
            open: false,
            itemSelected: null
          }
        case actionTypes.DATA_CLOSE:
          return {
            ...state,
            showError: false,
            error: null,
            open: false
          }*/
      default:
        return state;
    }
  }
}

export default itemsReducerForScope;
