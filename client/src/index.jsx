import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './_helpers';
import { App } from './App';


//Commenting the Fake Backend to use real backend SQL

// setup fake backend
import { configureBackend } from './_helpers';
configureBackend();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);