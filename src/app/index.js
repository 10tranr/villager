import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app.js';
import reducers from './reducer/reducers.js';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    // <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    // {/* </Provider> */}
    , document.querySelector('.container'));
