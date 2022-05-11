import React from 'react';
import classes from './MyMess.module.css';

const MessageMY = ({message}) => {
  return (
    <div className={classes.Message}>
      <div className={classes.Message__Text}>{message}</div>
      <img
        src="https://i.pinimg.com/originals/94/67/61/946761e2f6bcbde6f2ceab394eb69677.jpg"
        alt="#"
      />
    </div>
  );
};

export default MessageMY;
