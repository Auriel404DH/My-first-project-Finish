import React from 'react';
import classes from './../Dialog.module.css';

const Message = ({ src, text }) => {
  return (
    <div className={classes.dialog__Message__All}>
      <img src={src} alt="#" />
      <div className={classes.dialog__message}>{text}</div>
    </div>
  );
};

export default Message;
