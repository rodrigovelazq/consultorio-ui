import itemsReducerForScope from 'src/helpers/reducers/items';
import formReducerForScope from 'src/helpers/reducers/form';
import deleteReducerForScope from 'src/helpers/reducers/delete';
import { scopes } from 'src/utils/constants';
import { combineReducers } from 'redux'
import { formActionTypesForScope } from 'src/helpers/actions/form';

const formInitialState = {
  item:{username: '',
  nombre: '',
  apellido: '',
  password: '',
  email: ''}
}

const actionTypes = formActionTypesForScope(scopes.USUARIOS);

const formSetupSucceeded = (state, data) => {
  return {
    ...state,
    item : {...data},
    loading: false
  };
};


export default combineReducers({
  items: itemsReducerForScope(scopes.USUARIOS),
  form: formReducerForScope(scopes.USUARIOS,formInitialState,{},formSetupSucceeded),
  delete: deleteReducerForScope(scopes.USUARIOS)
});
