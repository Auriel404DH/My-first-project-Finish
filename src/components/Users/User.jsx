import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './users.module.css';

let User = ({ u, idUser, followingInProgress, unfollowThunkCreator, followThunkCreator }) => {
  return (
    <div key={idUser} className={styles.AllList}>
      <span className={styles.leftPart}>
        <div>
          <NavLink to={'/Profile/' + idUser}>
            <img src={u.photos.large} alt={'#'} className={styles.usersPhoto} />
          </NavLink>
        </div>
        <div>
          {u.friend ? (
            <button
              disabled={followingInProgress.some((id) => id === idUser)}
              className={styles.button}
              onClick={() => {
                unfollowThunkCreator(idUser);
              }}
            >
              Забыть
            </button>
          ) : (
            <button
              className={styles.button}
              disabled={followingInProgress.some((id) => id === idUser)}
              onClick={() => {
                followThunkCreator(idUser);
              }}
            >
              Дружить
            </button>
          )}
        </div>
      </span>
      <span className={styles.info}>
        <span>
          <div className={styles.name}>{u.name}</div>
          <div className={styles.status}>{u.status}</div>
        </span>
        <span className={styles.info2}>
          <div>{'u.location.city'}</div>
          <div>{'u.location.act'}</div>
        </span>
      </span>
    </div>
  );
};

export default User;
