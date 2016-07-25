import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import store from './store/store';

//Component
import App from './components/App';
import HomePageMain from './components/body/home/HomePageMain';
import PageNotFound from './components/common/PageNotFound';


const history = syncHistoryWithStore(browserHistory, store);
let routes = (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePageMain}/>
    </Route>
    <Route path="*" name="Page Not Found" component={PageNotFound}/>
  </Router>
);

export default routes;