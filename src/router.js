import React from 'react';
import { Route,Router } from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import App from 'views/App';
import MainApp from 'app/App';
import SearchCar from 'views/page/product';
import DetailCar from 'views/page/detail';
import InfoRentalCar from 'views/page/info-order';
import FinalRentalCar from 'views/page/final';
import Management  from 'containers/private/layout-management/index';
const PublicRoutes = ({ history, }) => {
  return (
    <Router history={history}>
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
          <Route
            exact={false}
            path={'/dashboard'}
            component={MainApp}
          />
          {/* <Route
            exact
            path={'/dashboard/Management'}
            component={Management}
          /> */}
        </div>
    </Router>
  );
};

export default PublicRoutes;
