import {auth as axios} from 'src/utils/axios';
import { formActionsForScope } from 'src/helpers/actions/form';
import { scopes } from 'src/utils/constants';
import { messageActions } from 'src/components/message/actions';
import { loadingActions } from 'src/components/loading/actions';
import {history} from 'src/helpers/actions/history';

export const actionTypes = {
    LOGIN_SUCEEDED: 'LOGIN_SUCEEDED',
    LOGIN_FAILED: 'LOGIN_FAILED',
    LOGOUT: 'LOGOUT',
    LOGOUT_FAILED: 'LOGOUT_FAILED',
    LOGOUT_SUCEEDED: 'LOGOUT_SUCEEDED',
    LOGIN_INPUT_CHANGED: 'LOGIN_INPUT_CHANGED',
};

const actions = {    
    ...formActionsForScope(scopes.LOGIN),
    history,
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
        type: actionTypes.LOGOUT_SUCEEDED
      };
    },
  
    logoutFailed() {
      return {
        type: actionTypes.LOGIN_FAILED
      };
    },
    ...messageActions(),
    ...loadingActions()
  };
  

export function login(user){
  return(dispatch)=>{
    dispatch(actions.formSubmit());
    dispatch(actions.loadingShow());
    return axios.post('auth/login', user).then((response) =>{
      if(response.data.auth){
          localStorage.setItem('user', JSON.stringify(...response.data));
      }
      dispatch(actions.loginSuceeded({id: response.data.id, username: response.data.username}));
      dispatch(actions.messageShow('Autenticación Correcta'));
      dispatch(actions.loadingClose());
      //actions.history.push('/usuarios');
  }).catch(error => {
      dispatch(actions.loginFailed());
      dispatch(actions.messageShow('Autenticación Incorrecta'));
      dispatch(actions.loadingClose());
  });
  }
}

export function logout(){
  return(dispatch)=>{
    try{
      dispatch(actions.logout());
      localStorage.removeItem('user');
      dispatch(actions.logoutSuceeded());
      dispatch(actions.messageShow('Finalización de sesión correcta'));
      dispatch(actions.loadingClose());   
      actions.history.push('/'); 
    }catch(error){
      dispatch(actions.loginFailed());
      dispatch(actions.messageShow('Autenticación Incorrecta'));
      dispatch(actions.loadingClose());      
    }
  }
}