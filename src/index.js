import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes/routes';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);


registerServiceWorker();
