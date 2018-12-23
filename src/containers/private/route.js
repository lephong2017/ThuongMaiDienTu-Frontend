import { Route, } from 'react-router-dom';
import React, { Component } from "react";
import CarManagement from 'containers/private/management/car/index';
import PartnerManagement from 'containers/private/management/partner/index';
const adminRoutes = [
  {
    path: "car",
    exact: false,
    component: ()=> <CarManagement/>
  },
  {
    path: "partner",
    exact: false,
    component: ()=> <PartnerManagement/>
  },
];

class AppRouter extends Component { 
  render() {
    const { url, style } = this.props;
    return (
      <div style={style}>
        {adminRoutes.map(singleRoute => {
          const { path,component, exact, ...otherProps } = singleRoute;
          return (
            <Route
              exact={exact === false ? false : true}
              key={path}
              path={`${url}/${path}`}
              component={component}
              {...otherProps}
            />
          );
        })}
      </div>
    );
  }
}

export default AppRouter;
