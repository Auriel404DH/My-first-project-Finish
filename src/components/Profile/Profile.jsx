import React from 'react';
import ProfileInfo from './profileInfo/profileInfo';
import Logo from './Logo/logo';
import MyPostContainer from './News/windowNew/MyPostContainer';

const Profile = (props) => {
  return (
    <div>
      <Logo />
      <ProfileInfo profile={props.profile} status={props.status} updateStatusThunk={props.updateStatusThunk} />
      <MyPostContainer />
    </div>
  );
};

export default Profile;
