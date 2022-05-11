import React from 'react';
import classes from './../Sidebar.module.css';


const Onl = (props) => {
  return (
    <div className={classes.online__friend}>
      <img src={props.src} alt="#" />
      <div>{props.name}</div>
    </div>
  );
};


export default Onl