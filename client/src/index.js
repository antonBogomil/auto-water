import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import './styles/index.css';
import './styles/form.scss'
import './styles/page.scss'
import './styles/default.scss'
import './styles/font/css/open-iconic-bootstrap.css'
import {Provider} from "react-redux";
import {store} from "./store";
import {BrowserRouter} from "react-router-dom";
import {authCheck} from "./helpers";

authCheck();
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);