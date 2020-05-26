import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Workers} from'./workers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            workers: Workers,
        }),
        applyMiddleware(thunk, logger)
    );
    
    return store;
}