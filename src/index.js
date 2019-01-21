import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Provider } from "react-redux";
import { createStore, applyMiddleware ,compose} from 'redux'; 
import appReducers from './redux/index'

import thunk from 'redux-thunk';
import PublicRoutes from "./router";
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
const history = createBrowserHistory();
const reactRouterMiddleware = routerMiddleware(history); 
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleWares = [ thunk, reactRouterMiddleware ];
const store = createStore(
    connectRouter(history)(appReducers), 
    composeEnhancer(
        applyMiddleware(...middleWares)
    ),
);


class Apply extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <PublicRoutes history={history} />
            </Provider>
        );
    }
}

ReactDOM.render(<Apply />, document.getElementById('root'));

serviceWorker.unregister();
