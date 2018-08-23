export const actionTypes = {
  MESSAGE_SHOW: 'MESSAGE_SHOW',
  MESSAGE_CLOSE: 'MESSAGE_CLOSE'
};

/**
 * Retorna un object literal que contiene los action creators de items para un scope
 * determinado que se pasa como parametro
 * @param {* el scope para el cual se retornan los action creators} scope
 */
export const messageActions = () => {
  return {
    messageShow: message => ({
      type: actionTypes.MESSAGE_SHOW,
      message
    }),
    messageClose: _ => ({
      type: actionTypes.MESSAGE_CLOSE
    })
  };
};
