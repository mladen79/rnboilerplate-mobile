import { composeWithDevTools } from 'redux-devtools-extension';
import {} from '../reducers';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { navMiddleware, navReducer } from '../../navigation';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  nav: navReducer
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk, navMiddleware)));

export default store;
