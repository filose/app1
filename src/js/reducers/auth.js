function auth(state = {}, action){

  switch(action.type){
    case 'LOGIN_USER':
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          uid: action.uid
        }
      };
    case 'LOGOUT_USER':
      return state;
    default:
      return state;
  }
}

export default auth;
