import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

let mapStateToPropsRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (this.props.isAuth === false) {
        return <Navigate to={'/login'} />;
      }
      return <Component {...this.props} />;
    }
  }

  return compose(connect(mapStateToPropsRedirect))(RedirectComponent);
};

