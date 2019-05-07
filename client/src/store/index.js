import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers'
const middleware = [thunk];
export const store = createStore(authReducer,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
