import React from 'react';
import { Route, } from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import App from 'views/App';
import SearchCar from 'views/page/product';
import DetailCar from 'views/page/detail';
import InfoRentalCar from 'views/page/info-order';
import FinalRentalCar from 'views/page/final';
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
        <Route
          exact
          path={'/detail'}
          component={DetailCar}
        />
        <Route
          exact
          path={'/info-rental-car'}
          component={InfoRentalCar}
        />
        <Route
          exact
          path={'/final'}
          component={FinalRentalCar}
        />
      </div>
    </ConnectedRouter>
  );
};

export default PublicRoutes;
