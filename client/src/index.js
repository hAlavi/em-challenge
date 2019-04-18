import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';

// Our Components
// import Login from './components/Login';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App} /> 
            {/*<Route exact path="/login" component={Login} />*/}
        </div>
    </Router>
    , document.getElementById('root')
);
// Unregister may be used instead
serviceWorker.register();
