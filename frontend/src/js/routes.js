import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import store from './store/store';

//Component
import App from './components/App';
import HomePageMain from './components/body/home/HomePageMain';
import PostPageMain from './components/body/post/PostPageMain';
import ViewPost from './components/body/post/ViewPost';
import PageNotFound from './components/common/PageNotFound';

import WYSIWYG from './components/wysiwyg/wysiwyg';

const history = syncHistoryWithStore(browserHistory, store);
let routes = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePageMain}/>
      <Route path="posts" name="Posts" component={PostPageMain}>
        <Route path=":id" name="View Posts" component={ViewPost}/>
      </Route>
      <Route path="wysiwyg" name="editor" component={WYSIWYG}/>
    </Route>
    <Route path="*" name="Page Not Found" component={PageNotFound}/>
  </Router>
);

export default routes;