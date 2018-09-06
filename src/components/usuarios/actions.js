import {instance as axios} from 'src/utils/axios';
import { itemsActionsForScope } from 'src/helpers/actions/items';
import { formActionsForScope } from 'src/helpers/actions/form';
import { scopes } from 'src/utils/constants';
import { deleteActionForScope} from 'src/helpers/actions/delete';
import { messageActions } from 'src/components/message/actions';
import { loadingActions } from 'src/components/loading/actions';
import request from 'request';

const actions = {
  ...itemsActionsForScope(scopes.USUARIOS),
  ...formActionsForScope(scopes.USUARIOS),
  ...deleteActionForScope(scopes.USUARIOS),
  ...messageActions(),
  ...loadingActions()
}

export function loadUsuarios(){
  return(dispatch)=>{
    /*
      const user = JSON.parse(localStorage.getItem('user'));
      var options = { method: 'GET',
      url: 'http://localhost:4000/usuarios',
      headers: { 
        Authorization: 'Bearer ' +user.token
      }};
      
      request(options, function (error, response, body) {
        if (error) throw new Error(error);
      
        console.log(body);
      });
    */
    dispatch(actions.dataRequested());
    dispatch(actions.loadingShow());
    axios.get("/usuarios").then((usuarios)=>{
      dispatch(actions.dataRequestSucceeded(usuarios.data));
      dispatch(actions.loadingClose());
    }).catch(error => {
      dispatch(actions.dataRequestFailed());
      dispatch(actions.messageShow("Ocurrio un error"));
      dispatch(actions.loadingClose());
    });
  }
}

export function getUsuario(idUsuario){
  return(dispatch)=>{
    dispatch(actions.formSetup(idUsuario));
    dispatch(actions.loadingShow());
    return axios.get("/usuarios/"+idUsuario).then((usuarios)=>{
      dispatch(actions.formSetupSucceeded(usuarios.data));
      dispatch(actions.loadingClose());
    }).catch(error => {
      dispatch(actions.formSetupFailed());
      dispatch(actions.messageShow(error.response.data));
      dispatch(actions.loadingClose());
    });
  }
}

export function addUsuario(newUsuario){
  return(dispatch)=>{
    dispatch(actions.formSubmit());
    dispatch(actions.loadingShow());
    return axios.post('/usuarios', newUsuario).then((response) =>{
      dispatch(actions.formSubmitSucceeded(response.data));
      dispatch(actions.messageShow('El usuario fue agregado correctamente'));
      dispatch(actions.loadingClose());
  }).catch(error => {
      dispatch(actions.formSubmitFailed());
      dispatch(actions.messageShow(error.response.data));
      dispatch(actions.loadingClose());
  });
  }
}

export function updateUsuario(oldUsuario){
  return(dispatch)=>{
    dispatch(actions.formSubmit());
    dispatch(actions.loadingShow());
    return axios.put('/usuarios/'+oldUsuario.id, oldUsuario).then((response) =>{
      dispatch(actions.formSubmitSucceeded(response.data));
      dispatch(actions.messageShow('El usuario fue actualizado correctamente'));
      dispatch(actions.loadingClose());
  }).catch(error => {
      dispatch(actions.formSubmitFailed());
      dispatch(actions.messageShow(error.response.data));
      dispatch(actions.loadingClose());
  });
  }
}

export function deleteUsuario(oldUsuario){
  return(dispatch)=>{
    dispatch(actions.deleteRequested(oldUsuario));
    dispatch(actions.loadingShow());
    return axios.delete('/usuarios/'+oldUsuario.id).then((response) =>{
      dispatch(actions.deleteSucceded(response.data));
      dispatch(actions.messageShow('El usuario fue eliminado correctamente'));
      dispatch(actions.loadingClose());
      dispatch(loadUsuarios());
  }).catch(error => {
      dispatch(actions.deleteFailed());
      dispatch(actions.messageShow(error.response.data));
      dispatch(actions.loadingClose());
  });
  }
}
