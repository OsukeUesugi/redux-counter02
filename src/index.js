import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Counter from './containers/Counter';
import reducer from './reducers';

const store = createStore(reducer);
const rootEl = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Counter />
    </Provider>,
    rootEl
);
