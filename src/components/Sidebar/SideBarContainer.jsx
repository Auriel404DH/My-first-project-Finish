// import React from 'react';
import { connect } from 'react-redux';
import qwertyThunkCreator from './../../redux/sReduser';
import { compose } from 'redux';
import Sidebar from './Sidebar';

let mapStateToProps = (state) => {
  return {
    dialogdataS: state.DialogPage.dialogData,
    isAuth: state.auth.isAuth,
  };
};

export default compose(connect(mapStateToProps, { qwertyThunkCreator }))(Sidebar);
