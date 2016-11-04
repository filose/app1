import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
import { listenAuth } from './actions/index';
import App from './components/App';
import Main from './components/Main';
import Test from './components/Test';
import Login from './components/Login';
import Register from './components/Register';

function resolve(nextState, replace){
  if(true){
    replace({
      pathname: 'login',
      state: {
        nextPathname: nextState.location.pathname
      }
    })
  }
}

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
        <IndexRoute component={Test} onEnter={resolve} />
      </Route>
    </Router>
  </Provider>
);

setTimeout(function(){
  store.dispatch(listenAuth());
});

render(router, document.querySelector('#app'));
