import React from 'react';
import Profile from './Profile';
// import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from './../../redux/pReduser';
import { useParams } from 'react-router-dom';
import { getProfileThunkCreator, setStatusThunk, updateStatusThunk } from './../../redux/pReduser';
import { withAuthRedirect } from '../../hoc/AuthReduser';
import { compose } from 'redux';

const withParams = (Component) => {
  return (props) => <Component {...props} params={useParams()} />;
};

class ProfileContainer extends React.Component {
  
  componentDidMount() {
    let userId = this.props.params.userId;
    if (!userId) {
      userId = 23173;
    }
    this.props.getProfileThunkCreator(userId);
    this.props.setStatusThunk(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        status={this.props.status}
        updateStatusThunk={this.props.updateStatusThunk}
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
  }),
  withAuthRedirect,
  withParams,
)(ProfileContainer);
