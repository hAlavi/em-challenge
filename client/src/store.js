import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
export { browserHistory as history };
