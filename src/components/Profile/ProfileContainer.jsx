import React from 'react';
import Profile from './Profile';
import { connect, useDispatch } from 'react-redux';
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

const ProfileContainer = (props) => {
  const dispatch = useDispatch();

  const refreshProfile = () => {
    let userId = props.params.userId;
    if (!userId) {
      userId = 23173;
    }
    dispatch(getProfileThunkCreator(userId));
    dispatch(setStatusThunk(userId));
  };

  React.useEffect(() => {
    refreshProfile();
  }, [props.params.userId]);

  return (
    <Profile
      isOwner={!props.params.userId}
      {...props}
      status={props.status}
      updateStatusThunk={props.updateStatusThunk}
      updateDataThunk={props.updateDataThunk}
    />
  );
};

let mapStateToProps = (state) => ({
  profile: state.ProfilePage.profile,
  status: state.ProfilePage.status,
});

export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    updateStatusThunk,
    updateProfilePhoto,
    updateDataThunk,
  }),
  withAuthRedirect,
  withParams,
)(ProfileContainer);
