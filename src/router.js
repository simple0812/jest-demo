import React from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
  routerRedux,
} from 'dva/router';
import dynamic from 'dva/dynamic';

const { ConnectedRouter } = routerRedux;
import { browserHistory} from 'react-router';

function RouteWithLayout({layout, component, ...rest}){
  return (
    <Route {...rest} render={(props) =>
      React.createElement( layout, props, React.createElement(component, props))
    }/>
  );
}


const RouterWrapper = ({ history, app }) => {

  const PageForbidden = dynamic({
    app,
    component: () => import('./components/PageForbidden'),
  });

  const PageServerError = dynamic({
    app,
    component: () => import('./components/PageServerError'),
  });

  const PageNetworkError = dynamic({
    app,
    component: () => import('./components/PageNetworkError'),
  });

  const PageNotFound = dynamic({
    app,
    component: () => import('./components/PageNotFound'),
  });

  const ContentPage = dynamic({
    app,
    component: () => import('./components/ContentPage'),
  });

  const IframePage = dynamic({
    app,
    component: () => import('./components/IframePage'),
  });

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/"  component={ContentPage} />
        {/* 403 */}
        <Route exact path="/403" component={PageForbidden} />
        {/* 500 */}
        <Route exact path="/500" component={PageServerError} />
        {/* 网络错误 */}
        <Route exact path="/error" component={PageNetworkError} />
        {/* 404 */}
        <Route component={PageNotFound} />
      </Switch>
    </ConnectedRouter>
   );
};

RouterWrapper.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
};

RouterWrapper.defaultProps = {};

export default RouterWrapper;
