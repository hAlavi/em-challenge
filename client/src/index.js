import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
// Our Components
// import Login from './components/Login';

ReactDOM.render(
    <Provider store={configureStore()}>
        <Router>
            <div>
                <Route exact path="/" component={App} /> 
                {/*<Route exact path="/login" component={Login} />*/}
            </div>
        </Router>
    </Provider>
    , document.getElementById('root')
);
// Unregister may be used instead
serviceWorker.register();
