import React, { useState } from 'react';
import classes from './../Profile.module.css';
import Preload from './../../common/Preloader/preload';
import ProfileStatus from './pStatus';
import User from './../../../assets/BlyaUser.jpg';
import icon from './../../../assets/icon.png';
import MyInformEdit from './profileDataForm';

const Profile = (props) => {
  let [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preload />;
  }

  // const Contact = ({ contactTitle, value }) => {

  //   return (
  //     <div className={classes.contact}>
  //       <b>{contactTitle}</b> : {value}
  //     </div>
  //   );
  // };

  const MyInform = ({ profile, isOwner, toEditMode }) => {
    return (
      <div>
        {isOwner && (
          <div>
            <button className={classes.editButtonStart} onClick={toEditMode}>Edit ^^</button>
          </div>
        )}
        <ul className={classes.info__list}>
          <li>
            <span>Birthday: </span> {profile.date}
          </li>
          {profile.lookingForAJob && (
            <li>
              <span>My professional skills: </span>
              {profile.lookingForAJobDescription}
            </li>
          )}
          <li>
            <span>Безработный? - </span> {profile.lookingForAJob ? 'true' : 'false'}
          </li>
          <li>
            <span>About Me:</span> {profile.aboutMe}
          </li>
          <li>
            <div>
              <b>Contacts: </b>
              {/* {Object.keys(profile.contacts).map((key) => {
                return <Contact key={key} contactTitle={key} value={profile.contacts[key]} />;
              })}{' '} */}
            </div>
          </li>
        </ul>
      </div>
    );
  };

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
            toEditMode={() => {
              setEditMode(false);
            }}
            updateDataThunk={props.updateDataThunk}
            profile={props.profile}
          />
        ) : (
          <MyInform
            toEditMode={() => {
              setEditMode(true);
            }}
            profile={props.profile}
            isOwner={props.isOwner}
          />
        )}
      </div>
    </div>
  );
};

export default Profile;
