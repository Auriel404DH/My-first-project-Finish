import React from 'react';
import ProfileInfo from './profileInfo/profileInfo';
import Logo from './Logo/logo';
import MyPostContainer from './News/windowNew/MyPostContainer';

const Profile = ({ isOwner, profile, status, updateStatusThunk, updateProfilePhoto }) => {
  return (
    <div>
      <Logo />
      <ProfileInfo
        isOwner={isOwner}
        profile={profile}
        status={status}
        updateProfilePhoto={updateProfilePhoto}
        updateStatusThunk={updateStatusThunk}
      />
      <MyPostContainer />
    </div>
  );
};

export default Profile;
