import { Route, } from 'react-router-dom';
import React, { Component } from "react";
import CarManagement from 'containers/private/management/car/index';
import CarOfPartnerManagement from 'containers/private/management/carPartner/index';
import PartnerManagement from 'containers/private/management/partner/index';
import OrderManagement from 'containers/private/management/orders/index';
import OrderOfPartnerManagement from 'containers/private/management/ordersPartner/index';
import TypecarManagement from 'containers/private/management/typecar/index';
import CustomerManagement from 'containers/private/management/customer/index';
import FeatureManagement from 'containers/private/management/feature/index';
import LocationManagement from 'containers/private/management/location/index';
import PackagesManagement from 'containers/private/management/packages/index';
import PaymentManagement from 'containers/private/management/payment/index';
import ProcedureManagement from 'containers/private/management/procedure/index';
import PartnerPackageManagement from 'containers/private/management/partnerPackage/index';
import * as CONST_VARIABLE from 'utils/const/index';

const managerRoutes = [
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
  {
    path: "oders",
    exact: false,
    component: ()=> <OrderManagement/>
  },
  {
    path: "typecar",
    exact: false,
    component: ()=> <TypecarManagement/>
  },
  {
    path: "customer",
    exact: false,
    component: ()=> <CustomerManagement/>
  },
  
  {
    path: "feature",
    exact: false,
    component: ()=> <FeatureManagement/>
  },
  {
    path: "location",
    exact: false,
    component: ()=> <LocationManagement/>
  },
  {
    path: "packages",
    exact: false,
    component: ()=> <PackagesManagement/>
  },
  {
    path: "payment",
    exact: false,
    component: ()=> <PaymentManagement/>
  },
  {
    path: "procedure",
    exact: false,
    component: ()=> <ProcedureManagement/>
  },
  {
    path: "partnerpackage",
    exact: false,
    component: ()=> <PartnerPackageManagement/>
  },
 
];

const partnerRoutes = [
  {
    path: "ordersOfPartner",
    exact: false,
    component: ()=> <OrderOfPartnerManagement/>
  },
  {
    path: "carOfPartner",
    exact: false,
    component: ()=> <CarOfPartnerManagement/>
  },
];

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
  {
    path: "oders",
    exact: false,
    component: ()=> <OrderManagement/>
  },
  {
    path: "typecar",
    exact: false,
    component: ()=> <TypecarManagement/>
  },
  {
    path: "customer",
    exact: false,
    component: ()=> <CustomerManagement/>
  },
  
  {
    path: "feature",
    exact: false,
    component: ()=> <FeatureManagement/>
  },
  {
    path: "location",
    exact: false,
    component: ()=> <LocationManagement/>
  },
  {
    path: "packages",
    exact: false,
    component: ()=> <PackagesManagement/>
  },
  {
    path: "payment",
    exact: false,
    component: ()=> <PaymentManagement/>
  },
  {
    path: "procedure",
    exact: false,
    component: ()=> <ProcedureManagement/>
  },
  {
    path: "partnerpackage",
    exact: false,
    component: ()=> <PartnerPackageManagement/>
  },
  {
    path: "ordersOfPartner",
    exact: false,
    component: ()=> <OrderOfPartnerManagement/>
  },
  {
    path: "carOfPartner",
    exact: false,
    component: ()=> <CarOfPartnerManagement/>
  },
 
];

class AppRouter extends Component { 
  render() {
    const role = sessionStorage.getItem(CONST_VARIABLE.ROLE_ACCOUNT);
    const { url, style } = this.props;
    return (
      <div style={style}>
        {
          (role==='ADMIN')?
          adminRoutes.map(singleRoute => {
          const { path,component, exact, ...otherProps } = singleRoute;
          return (
            <Route
              // exact={exact === false ? false : true}
              exact={true}
              key={path}
              path={`${url}/${path}`}
              component={component}
              {...otherProps}
            />
          );
        })
        :
        (role==='MANAGER')?
        managerRoutes.map(singleRoute => {
          const { path,component, exact, ...otherProps } = singleRoute;
          return (
            <Route
              // exact={exact === false ? false : true}
              exact={true}
              key={path}
              path={`${url}/${path}`}
              component={component}
              {...otherProps}
            />
          );
        })
        :
        partnerRoutes.map(singleRoute => {
          const { path,component, exact, ...otherProps } = singleRoute;
          return (
            <Route
              // exact={exact === false ? false : true}
              exact={true}
              key={path}
              path={`${url}/${path}`}
              component={component}
              {...otherProps}
            />
          );
        })
        }
      </div>
    );
  }
}

export default AppRouter;
