import axios from 'src/utils/axios';
import { formActionsForScope } from 'src/helpers/actions/form';
import { scopes } from 'src/utils/constants';

export const actionTypes = {
    LOGIN_SUCEEDED: 'LOGIN_SUCEEDED',
    LOGIN_FAILED: 'LOGIN_FAILED',
    LOGOUT: 'LOGOUT',
    LOGOUT_FAILED: 'LOGOUT_FAILED',
    LOGOUT_SUCEEDED: 'LOGOUT_SUCEEDED',
};

const actions = {    
    ...formActionsForScope(scopes.LOGIN),

    loginSuceeded(item) {
      return {
        type: actionTypes.LOGIN_SUCEEDED,
        item
      };
    },
  
    loginFailed() {
      return {
        type: actionTypes.LOGIN_FAILED
      };
    },
    logout() {
      return {
        type: actionTypes.LOGOUT
      };
    },
    logoutSuceeded() {
      return {
        type: actionTypes.LOGIN_SUCEEDED
      };
    },
  
    logoutFailed() {
      return {
        type: actionTypes.LOGIN_FAILED
      };
    },
  };
  

export function login(user){
  return(dispatch)=>{
    dispatch(actions.formSubmit());
    dispatch(actions.loadingShow());
    return axios.post('/login', user).then((response) =>{
      dispatch(actions.loginSuceeded(response.data));
      dispatch(actions.messageShow('Autenticación Correcta'));
      dispatch(actions.loadingClose());
  }).catch(error => {
      dispatch(actions.loginFailed());
      dispatch(actions.messageShow('Autenticación Incorrecta'));
      dispatch(actions.loadingClose());
  });
  }
}

export function logout(){
  return(dispatch)=>{
    dispatch(actions.logout());
    return axios.post('/logout').then((response) =>{
      dispatch(actions.logoutSuceeded());
      dispatch(actions.messageShow('Finalización de sesión correcta'));
      dispatch(actions.loadingClose());
  }).catch(error => {
      dispatch(actions.logoutFailed());
      dispatch(actions.messageShow('Ocurrio un error'));
      dispatch(actions.loadingClose());
  });
  }
}