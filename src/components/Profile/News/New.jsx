import React from 'react';
import classes from './MyNew.module.css';

const New = ({ id, message }) => {
  return (
    <div className={classes.all}>
      <div className={classes.post}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgnNc5EA5lx65MZrAyxVBuYtY9k3mtWA8_Fw&usqp=CAU"
          alt="#"
        />
        <div className={classes.post__text} id={id}>
          {' '}
          {message}{' '}
        </div>
      </div>
    </div>
  );
};

export default New;
