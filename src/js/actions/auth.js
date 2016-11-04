import { onAuth, login, register, logout } from '../modules/Firebase';

export function listenAuth(){
  return function(dispatch, getState){
    onAuth(user => {
      if(user){
        dispatch({
          type: 'LOGIN_USER',
          uid: user.uid
        });
      }else{
        console.log('Logged out');
      }
    });
  }
}

export function userRegister(username, email, password, successCallback){
  return (dispatch, getState) => {
    register(email, password)
      .then(user => {
        // Save username to firebase
      })
      .then(successCallback)
      .catch(error => console.log(error.message));
  }
}

export function userLogin(email, password, successCallback){
  return (dispatch, getState) => {
    login(email, password)
      .then(successCallback)
      .catch(error => console.log(error.message));
  }
}

export function userLogout(){
  return (dispatch, getState) => {
    logout();
    dispatch({
      type: 'LOGOUT_USER',
      uid: {}
    });
  }
}
