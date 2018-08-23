export const actionTypes = {
  DELETE_REQUESTED: 'DELETE_REQUESTED',
  DELETE_DO_DELETE: 'DELETE_DO_DELETE',
  DELETE_CANCEL: 'DELETE_CANCEL',
  DELETE_SUCCEDED: 'DELETE_SUCCEDED',
  DELETE_FAILED: 'DELETE_FAILED'
};

export const deleteActionTypesForScope = scope => ({
  DELETE_REQUESTED: `${scope}_${actionTypes.DELETE_REQUESTED}`,
  DELETE_DO_DELETE: `${scope}_${actionTypes.DELETE_DO_DELETE}`,
  DELETE_CANCEL: `${scope}_${actionTypes.DELETE_CANCEL}`,
  DELETE_SUCCEDED: `${scope}_${actionTypes.DELETE_SUCCEDED}`,
  DELETE_FAILED: `${scope}_${actionTypes.DELETE_FAILED}`
});

export const deleteActionForScope = scope => {
  const actionTypes = deleteActionTypesForScope(scope);
  return {
    deleteRequested: item => ({
      type: actionTypes.DELETE_REQUESTED,
      item: item
    }),
    doDelete: () => ({
      type: actionTypes.DELETE_DO_DELETE
    }),
    cancelDelete: _ => ({
      type: actionTypes.DELETE_CANCEL
    }),
    deleteSucceded: _ => ({
      type: actionTypes.DELETE_SUCCEDED
    }),
    deleteFailed: error => ({
      type: actionTypes.DELETE_FAILED,
      error: error
    })
  };
};

export const deleteDispatchesForScope = (scope, dispatch) => {
  const actionCreators = deleteActionForScope(scope);
  return {
    deleteRequested: item => dispatch(actionCreators.deleteRequested(item)),
    doDelete: () => dispatch(actionCreators.doDelete()),
    cancelDelete: () => dispatch(actionCreators.cancelDelete()),
    deleteSucceded: () => dispatch(actionCreators.deleteSucceded()),
    deleteFailed: error => dispatch(actionCreators.deleteFailed(error))
  };
};
