import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';

import DepartureService from './containers/DeparturesContainer';
import TrainCallingPoint from './containers/TrainCallingPointContainer';

const store = configureStore();

ReactDOM.render((
    <Provider store={ store }>
        <Router history={ browserHistory }>
            <Route path="/" component={ DepartureService }>
                <Route path='**' component={ TrainCallingPoint } />
            </Route>

        </Router>
    </Provider>
), document.getElementById('root'));
