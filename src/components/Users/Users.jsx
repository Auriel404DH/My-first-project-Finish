import React from 'react';
import Paginator from '../common/paginator/Paginator';
import User from './User';
import styles from './users.module.css';

let Users = ({ onPageChanged, totalItemsCount, pageSize, users, followingInProgress }) => {
  return (
    <div className={styles.all}>
      <Paginator
        onPageChanged={onPageChanged}
        totalItemsCount={totalItemsCount}
        pageSize={pageSize}
      />
      {users.map((u) => (
        <User u={u} idUser={u.id} followingInProgress={followingInProgress} />
      ))}
    </div>
  );
};

export default Users;
