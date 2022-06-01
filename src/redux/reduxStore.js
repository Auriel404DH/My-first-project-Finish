import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import messageReduser from './dReduser';
import profileReduser from './pReduser';
import sidebarReduser from './sReduser';
import usersReduser from './uReduser';
import autReduser from './autReduser';
import thunkMiddleware from 'redux-thunk';
import appReduser from './appReduser';

let redusers = combineReducers({
  DialogPage: messageReduser,
  ProfilePage: profileReduser,
  SidebarPage: sidebarReduser,
  usersPage: usersReduser,
  auth: autReduser,
  app: appReduser,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(redusers, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store;
