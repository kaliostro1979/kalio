import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import {reducers} from "./redux/reducers/rootReducer";
import thunk from "redux-thunk";
import './i18n'


const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback="Loading...">
            <Provider store={store}>
                <App/>
            </Provider>
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
