export const actionTypes = {
  LOADING_SHOW: 'LOADING_SHOW',
  LOADING_CLOSE: 'LOADING_CLOSE'
};

/**
 * Retorna un object literal que contiene los action creators de items para un scope
 * determinado que se pasa como parametro
 * @param {* el scope para el cual se retornan los action creators} scope
 */
export const loadingActions = () => {
  return {
    loadingShow: message => ({
      type: actionTypes.LOADING_SHOW
    }),
    loadingClose: _ => ({
      type: actionTypes.LOADING_CLOSE
    })
  };
};
