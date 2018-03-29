import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import promisesMiddleware from '../middlewares/promises';
import counterReducer from './counter';
import issuesReducer from './issues';

const reducer = combineReducers({
    counter: counterReducer,
    issues: issuesReducer
});

let store = createStore(reducer, applyMiddleware(promisesMiddleware, logger));

/*const store = createStore(reducer, {
    issues: [],
    counter: 0,
});*/


export default store;