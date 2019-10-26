import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';

// Import Redux
import configureStore from './store/configureStore';
import history from './store/history';

// Import global styles
import './style/style.css';

// Import Views
import HomePage from './views';

const store = configureStore();

const AppRoutes = () => (
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route
                    exact
                    path="/"
                    name="Homepage"
                    component={HomePage}
                />
            </Switch>
        </Router>
    </Provider>
);

ReactDOM.render(<AppRoutes />, document.getElementById('root'));
