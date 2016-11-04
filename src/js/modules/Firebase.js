import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDima20Fz7AA9u8XtcSwACEsVbgDqeWrsY",
  authDomain: "scorecast-app.firebaseapp.com",
  databaseURL: "https://scorecast-app.firebaseio.com",
  storageBucket: "scorecast-app.appspot.com",
  messagingSenderId: "781549991568"
};

firebase.initializeApp(config);

const auth = firebase.auth();

export function register(email, password){
  const promise = auth.createUserWithEmailAndPassword(email, password);
  return promise;
}

export function login(email, password){
  const promise = auth.signInWithEmailAndPassword(email, password);
  return promise;
}

export function logout(){
  const promise = auth.signOut();
  return promise;
}

export function onAuth(callback){
  return auth.onAuthStateChanged(callback);
}

export function resolveAuth(){
  return onAuth(user => {
    if(user){
      return true;
    }
    return false;
  });
}

export function getAuth(){
  return auth.currentUser;
}
