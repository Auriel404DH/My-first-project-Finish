import React from 'react';
import ProfileInfo from './profileInfo/profileInfo';
import Logo from './Logo/logo';
import MyPost from './News/MyPost';

const Profile = ({
  isOwner,
  profile,
  status,
  updateStatusThunk,
  updateProfilePhoto,
  updateDataThunk,
}) => {
  return (
    <div>
      <Logo />
      <ProfileInfo
        isOwner={isOwner}
        profile={profile}
        status={status}
        updateDataThunk={updateDataThunk}
        updateProfilePhoto={updateProfilePhoto}
        updateStatusThunk={updateStatusThunk}
      />
      <MyPost />
    </div>
  );
};

export default Profile;
