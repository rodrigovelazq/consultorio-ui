import { formActionTypesForScope } from 'src/helpers/actions/form';

const defaultFormSetupSucceeded = (state, data) => {
  return {
    ...state,
    item : {...data}
  };
}

const formReducerForScope = (scope, defaultFormState, formSetupSucceeded = defaultFormSetupSucceeded) => {
  defaultFormState = {
    //validations: {},
    ...defaultFormState
  };
  const actionTypes = formActionTypesForScope(scope);
  return (state = defaultFormState, action) => {
    switch (action.type) {
      case actionTypes.FORM_INPUT_CHANGED:
        const item = { ...state.item };
        item[action.field] = action.value;
        return {
          ...state,
          item,
          //validations: {}
        };
      case actionTypes.FORM_SUBMIT_FAILED:
        return {
          ...state
        };
      case actionTypes.FORM_SUBMIT_SUCCEEDED:
        return {
          ...state
        };
      case actionTypes.FORM_CANCEL:
        return {
          ...defaultFormState
        };
      case actionTypes.FORM_SUBMIT:
        return {
          ...state
        };
      case actionTypes.FORM_SETUP:
        return {
          ...state
        };
      case actionTypes.FORM_SETUP_SUCCEEDED:
        return formSetupSucceeded(state,action.data);
      case actionTypes.FORM_SETUP_FAILED:
        return {
          ...state
        };
      default:
        return state;
    }
  };
};

export default formReducerForScope;
