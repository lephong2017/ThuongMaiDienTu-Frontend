import { Route, } from 'react-router-dom';
import React, { Component } from "react";
import App from 'containers/private/layout-management/index';
const adminRoutes = [
  {
    path: "management",
    exact: true,
    component: (props)=> <App {...props}/>
  },
];

class AppRouter extends Component { 
  render() {
    const { url, style } = this.props;
    return (
      <div style={style} >
        {adminRoutes.map(singleRoute => {
          const { path,component, exact, ...otherProps } = singleRoute;
          return (
            <Route
              // exact={exact === false ? false : true}
              exact={false}
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
