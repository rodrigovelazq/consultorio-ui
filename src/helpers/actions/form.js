export const actionTypes = {
  FORM_INPUT_CHANGED: 'FORM_INPUT_CHANGED',
  //FORM_VALIDATE_FIELD: 'FORM_VALIDATE_FIELD',
  //FORM_VALIDATE_ALL: 'FORM_VALIDATE_ALL',
  FORM_CANCEL: 'FORM_CANCEL',
  FORM_SUBMIT: 'FORM_SUBMIT',
  FORM_SUBMIT_SUCCEEDED: 'FORM_SUBMIT_SUCCEEDED',
  FORM_SUBMIT_FAILED: 'FORM_SUBMIT_FAILED',
  FORM_SETUP: 'FORM_SETUP_REQUESTED',
  FORM_SETUP_SUCCEEDED: 'FORM_SETUP_SUCCEEDED',
  FORM_SETUP_FAILED: 'FORM_SETUP_FAILED',
  //FORM_CLEAN_STATE: 'FORM_CLEAN_STATE',
  //FORM_SET_LOADING: 'FORM_SET_LOADING'
}

/**
 * Retorna un object literal que contiene las acciones disponibles de form para un scope
 * determinado que se pasa como parametro
 * @param {* el scope para el cual se retornar los tipos de accion} scope
 */
export const formActionTypesForScope = scope => ({
  FORM_INPUT_CHANGED: `${scope}_${actionTypes.FORM_INPUT_CHANGED}`,
  //FORM_VALIDATE_FIELD: `${scope}_${actionTypes.FORM_VALIDATE_FIELD}`,
  //FORM_VALIDATE_ALL: `${scope}_${actionTypes.FORM_VALIDATE_ALL}`,
  FORM_CANCEL: `${scope}_${actionTypes.FORM_CANCEL}`,
  FORM_SUBMIT: `${scope}_${actionTypes.FORM_SUBMIT}`,
  FORM_SUBMIT_SUCCEEDED: `${scope}_${actionTypes.FORM_SUBMIT_SUCCEEDED}`,
  FORM_SUBMIT_FAILED: `${scope}_${actionTypes.FORM_SUBMIT_FAILED}`,
  FORM_SETUP: `${scope}_${actionTypes.FORM_SETUP}`,
  FORM_SETUP_SUCCEEDED: `${scope}_${actionTypes.FORM_SETUP_SUCCEEDED}`,
  FORM_SETUP_FAILED: `${scope}_${actionTypes.FORM_SETUP_FAILED}`,
  //FORM_CLEAN_STATE: `${scope}_${actionTypes.FORM_CLEAN_STATE}`,
  //FORM_SET_LOADING: `${scope}_${actionTypes.FORM_SET_LOADING}`,
});

/**
 * Retorna un object literal que contiene los action creators de form para un scope
 * determinado que se pasa como parametro
 * @param {* el scope para el cual se retornan los action creators} scope
 */
export const formActionsForScope = scope => {
  const actionTypes = formActionTypesForScope(scope);
  return {
    formInputChanged: (field, value) => ({
      type: actionTypes.FORM_INPUT_CHANGED,
      field,
      value
    }),
    /*formValidateField: field => ({
      type: actionTypes.FORM_VALIDATE_FIELD,
      field
    }),
    formValidateAll: _ => ({
      type: actionTypes.FORM_VALIDATE_ALL
    }),*/
    formCancel: _ => ({
      type: actionTypes.FORM_CANCEL
    }),
    formSubmit: _ => ({
      type: actionTypes.FORM_SUBMIT
    }),
    formSubmitSucceeded: data => ({
      type: actionTypes.FORM_SUBMIT_SUCCEEDED,
      data
    }),
    formSubmitFailed: errors => ({
      type: actionTypes.FORM_SUBMIT_FAILED
    }),
    formSetup: itemId => ({
      type: actionTypes.FORM_SETUP,
      itemId
    }),
    formSetupSucceeded: data => ({
      type: actionTypes.FORM_SETUP_SUCCEEDED,
      data
    }),
    formSetupFailed: errors => ({
      type: actionTypes.FORM_SETUP_FAILED
    }),
    /*formCleanState: _ => ({
      type: actionTypes.FORM_CLEAN_STATE
    }),
    formSetLoading: loading => ({
      type: actionTypes.FORM_SET_LOADING,
      loading
    })*/
  }
};

/**
 * Retorna un object literal que contiene los action dispatch de un scope determinado.
 * @param {* el scope de los actions creators que se usaran para la creacion de dispatches} scope
 * @param {* el redux dispatcher} dispatch
 */
export const formDispatchesForScope = (scope, dispatch) => {
  const actionCreators = formActionsForScope(scope);
  return {
    formInputChanged: (field, value) => dispatch(actionCreators.formInputChanged(field, value)),
    //formValidateField: field => dispatch(actionCreators.formValidateField(field)),
    //formValidateAll: _ => dispatch(actionCreators.formValidateAll()),
    formCancel: _ => dispatch(actionCreators.formCancel()),
    formSubmit: _ => {
      //dispatch(actionCreators.formValidateAll());
      dispatch(actionCreators.formSubmit());
    },
    formSubmitSucceeded: data => dispatch(actionCreators.formSubmitSucceeded(data)),
    formSubmitFailed: _ => dispatch(actionCreators.formSubmitFailed()),
    formSetup: itemId => dispatch(actionCreators.formSetup(itemId)),
    formSetupSucceeded: data => dispatch(actionCreators.formSetupSucceeded(data)),
    formSetupFailed: _ => dispatch(actionCreators.formSetupFailed()),
    //formCleanState: _ => dispatch(actionCreators.formCleanState()),
    //formSetLoading: loading => dispatch(actionCreators.formSetLoading(loading))
  }
}
