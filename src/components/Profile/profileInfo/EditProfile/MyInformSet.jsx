import React from 'react';
import classes from './../../Profile.module.css';

const MyInformSet = ({ profile, isOwner, toEditMode }) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button className={classes.editButtonStart} onClick={toEditMode}>
            Edit ^^
          </button>
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
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MyInformSet;
