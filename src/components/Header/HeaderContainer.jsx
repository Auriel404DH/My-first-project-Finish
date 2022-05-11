import React from 'react';
import Header from './Header';
// import * as axios from 'axios';
import { connect } from 'react-redux';
import { LogoutAuthThunkCreator } from './../../redux/autReduser';

class HeaderComponent extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, { LogoutAuthThunkCreator })(HeaderComponent);
