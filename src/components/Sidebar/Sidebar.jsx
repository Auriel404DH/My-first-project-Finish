import React from 'react';
import { NavLink } from 'react-router-dom';
import Onl from './OnlineList/online';
import classes from './Sidebar.module.css';
import getRand from './random/random';
import { useMemo } from 'react';

const Sidebar = (props) => {
  let dialogData = props.dialogdataS;

  const list = useMemo(
    () => dialogData.filter((element) => element.id !== getRand(1, 5)),
    [dialogData],
  );

  let newList = list.map((element) => {
    return <Onl src={element.src} name={element.name} key={element.id} />;
  });

  if (!props.isAuth) {
    return null
  }

  return (
    <div className={classes.sidebar}>
      <NavLink to="/Profile">Главная</NavLink>
      <NavLink to="/Dialog">Собщения</NavLink>
      <NavLink to="/News">Новости</NavLink>
      <NavLink to="/Users">Персонажи</NavLink>
      <NavLink to="/Music">Музыка</NavLink>
      <NavLink to="/Exit">Выход</NavLink>
      <div className={classes.online}> Online </div>
      <div className={classes.list__style}>{newList}</div>
    </div>
  );
};

export default Sidebar;
