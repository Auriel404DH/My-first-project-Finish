import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './../Dialog.module.css';

const DialogItem = ({ src, id, name }) => {
  return (
    <div className={classes.dialog__item + ' ' + classes.dialog__active}>
      <img src={src} alt="#"></img>
      <NavLink to={'/Dialog/' + id} key={id}>
        {name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
