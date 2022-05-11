import React from 'react';
import Paginator from '../common/paginator/Paginator';
import User from './User';
import styles from './users.module.css';

let Users = (props) => {
  return (
    <div className={styles.all}>
      <Paginator
        onPageChanged={props.onPageChanged}
        totalItemsCount={props.totalItemsCount}
        pageSize={props.pageSize}
      />
      {props.users.map((u) => (
        <User
          u={u}
          idUser={u.id}
          followingInProgress={props.followingInProgress}
          unfollowThunkCreator={props.unfollowThunkCreator}
          followThunkCreator={props.followThunkCreator}
        />
      ))}
    </div>
  );
};

export default Users;
