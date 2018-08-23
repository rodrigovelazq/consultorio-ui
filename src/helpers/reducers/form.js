import { formActionTypesForScope } from 'src/helpers/actions/form';

const defaultFormSetupSucceeded = (state, data) => {
  return {
    ...state,
    item : {...data},
    loading: false
  };
}

const formReducerForScope = (scope, defaultFormState, validationsSpec, formSetupSucceeded = defaultFormSetupSucceeded) => {
  defaultFormState = {
    validations: {},
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
          validations: {}
        };
      case actionTypes.FORM_SUBMIT_FAILED:
        return {
          ...state,
          loading: false
        };
      case actionTypes.FORM_SUBMIT_SUCCEEDED:
        return {
          ...state,
          loading: false
        };
      case actionTypes.FORM_CANCEL:
        return {
          ...defaultFormState
        };
      case actionTypes.FORM_SETUP:
        return {
          ...state,
          loading: true
        };
      case actionTypes.FORM_SETUP_SUCCEEDED:
        return formSetupSucceeded(state,action.data);
      case actionTypes.FORM_SETUP_FAILED:
        return {
          ...state,
          loading: false
        };
      default:
        return state;
    }
  };
};

export default formReducerForScope;
