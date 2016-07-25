import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import routes from './routes';

render((
    <Provider store = {store}>
        {routes}
    </Provider>
), document.getElementById('nepanime-app'));