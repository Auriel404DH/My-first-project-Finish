import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './users.module.css';
import UserFoto from './../../assets/Userw.jpg';
import { useDispatch } from 'react-redux';
import { unfollowThunkCreator, followThunkCreator } from '../../redux/uReduser';

let User = ({ u, idUser, followingInProgress }) => {
  const dispatch = useDispatch();

  const unfollow = () => {
    dispatch(unfollowThunkCreator(idUser));
  };

  const follow = () => {
    dispatch(followThunkCreator(idUser));
  };

  return (
    <div key={idUser} className={styles.AllList}>
      <span className={styles.leftPart}>
        <div>
          <NavLink to={'/Profile/' + idUser}>
            <img src={u.photos.large || UserFoto} alt={'#'} className={styles.usersPhoto} />
          </NavLink>
        </div>
        <div>
          {u.friend ? (
            <button
              disabled={followingInProgress.some((id) => id === idUser)}
              className={styles.button}
              onClick={unfollow}
            >
              Удалить
            </button>
          ) : (
            <button
              className={styles.button}
              disabled={followingInProgress.some((id) => id === idUser)}
              onClick={follow}
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
