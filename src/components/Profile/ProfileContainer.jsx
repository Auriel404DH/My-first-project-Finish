import React from 'react';
import Profile from './Profile';
// import * as axios from 'axios';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/AuthReduser';
import { compose } from 'redux';
import {
  getProfileThunkCreator,
  setStatusThunk,
  updateStatusThunk,
  updateProfilePhoto,
  setUserProfile,
  updateDataThunk,
} from './../../redux/pReduser';

const withParams = (Component) => {
  return (props) => <Component {...props} params={useParams()} />;
};

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.params.userId;
    if (!userId) {
      userId = 23173;
    }
    this.props.getProfileThunkCreator(userId);
    this.props.setStatusThunk(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.params.userId !== prevProps.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        isOwner={!this.props.params.userId}
        {...this.props}
        status={this.props.status}
        updateStatusThunk={this.props.updateStatusThunk}
        updateDataThunk={this.props.updateDataThunk}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.ProfilePage.profile,
  status: state.ProfilePage.status,
});

export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    getProfileThunkCreator,
    setStatusThunk,
    updateStatusThunk,
    updateProfilePhoto,
    updateDataThunk,
  }),
  withAuthRedirect,
  withParams,
)(ProfileContainer);
