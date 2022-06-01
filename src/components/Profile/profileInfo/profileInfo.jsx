import React, { useState } from 'react';
import classes from './../Profile.module.css';
import Preload from './../../common/Preloader/preload';
import ProfileStatus from './EditProfile/pStatus';
import User from './../../../assets/Userw.jpg';
import icon from './../../../assets/icon.png';
import MyInformEdit from './EditProfile/MyInformEdit';
import MyInformSet from './EditProfile/MyInformSet';

const Profile = (props) => {
  let [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preload />;
  }

  const mainPhotoSelected = (e) => {
    if (e.target.files.length) {
      let photo = e.target.files[0];
      props.updateProfilePhoto(photo);
    }
  };

  const friendYes = () => {
    setEditMode(true);
  };

  const friendNo = () => {
    setEditMode(false);
  };

  return (
    <div className={classes.content__info}>
      <div className={classes.info__photo}>
        <label>
          {props.isOwner && <img className={classes.qwe} src={icon} alt="#" />}
          {props.isOwner && <input type={'file'} onChange={mainPhotoSelected} />}
        </label>
        <img className={classes.ava} src={props.profile.photos.large || User} alt="#" />
      </div>
      <div className={classes.info__info}>
        <span className={classes.info__title}>
          {props.profile.fullName}{' '}
          <a href="#s" className={classes.status}>
            {'(looking job: ' + props.profile.lookingForAJob + ')'}
          </a>
          <ProfileStatus
            isOwner={props.isOwner}
            status={props.status}
            updateStatusThunk={props.updateStatusThunk}
          />
        </span>
        {editMode ? (
          <MyInformEdit
            toEditMode={friendNo}
            updateDataThunk={props.updateDataThunk}
            profile={props.profile}
          />
        ) : (
          <MyInformSet toEditMode={friendYes} profile={props.profile} isOwner={props.isOwner} />
        )}
      </div>
    </div>
  );
};

export default Profile;
