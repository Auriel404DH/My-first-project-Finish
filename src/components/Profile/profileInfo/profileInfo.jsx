import React from 'react';
import classes from './../Profile.module.css';
import Preload from './../../common/Preloader/preload';
import ProfileStatus from './pStatus';
import User from './../../../assets/BlyaUser.jpg';
import icon from './../../../assets/icon.png';

const Profile = (props) => {
  if (!props.profile) {
    return <Preload />;
  }

  const mainPhotoSelected = (e) => {
    if (e.target.files.length) {
      let photo = e.target.files[0];
      props.updateProfilePhoto(photo);
    }
  };

  return (
    <div className={classes.content__info}>
      <div className={classes.info__photo}>
        <label>
          <img className={classes.qwe} src={icon} alt="#" />
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
          <ProfileStatus status={props.status} updateStatusThunk={props.updateStatusThunk} />
        </span>
        <ul className={classes.info__list}>
          <li>
            <span>Date of Birth:</span> 28.04.2003
          </li>
          <li>
            <span>City:</span> BARNAUL
          </li>
          <li>
            <span>Education:</span> {props.profile.aboutMe || '42'}
          </li>
          <li>
            <span>Web-Site:</span> {props.profile.contacts.vk || 'this'}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
