import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import App from 'views/App';
import SearchCar from 'views/page/product';

const PublicRoutes = ({ history, }) => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Route
          exact
          path={'/'}
          component={App}
        />
        <Route
          exact
          path={'/tim-xe'}
          component={SearchCar}
        />
      </div>
    </ConnectedRouter>
  );
};

export default PublicRoutes;
