import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router'
import store, { history } from './store';
import ShowSearch from './showSearch';
// Our Components
// import Login from './components/Login';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route exact path="/search" component={App} /> 
                <Route exact path="/" component={ShowSearch} />
            </div>
        </Router>
    </Provider>
    , document.getElementById('root')
);
// Unregister may be used instead
serviceWorker.register();
