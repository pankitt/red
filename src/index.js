import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import store from './reducers/index';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();

store.subscribe( () => console.log('New state', store.getState()) );

store.dispatch({
    type: 'INCREASE_COUNTER',
});
store.dispatch({
    type: 'INCREASE_COUNTER',
});
store.dispatch({
    type: 'INCREASE_COUNTER',
});
store.dispatch({
    type: 'RESET_COUNTER',
});
store.dispatch({
    type: 'UNKNOWN',
});
store.dispatch({
    type: 'ISSUES_LOADED',
    data: [{id: 1, title: 'First issue'}, {id: 2, title: 'Second issue'}],
});

