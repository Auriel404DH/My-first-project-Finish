import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
// import { Navigate } from 'react-router-dom';

const Header = ({ isAuth, login, LogoutAuthThunkCreator }) => {
  return (
    <div className={classes.header}>
      <img src="https://rakit.ru/wp-content/uploads/2016/02/Pepsi-logo.png" alt="#" />
      <div>
        {isAuth ? (
          <div className={classes.header__news}>
            А знали ли вы, что вы на самом деле пидор ебаный...
          </div>
        ) : null}
      </div>
      <div className={classes.login_block}>
        {isAuth ? (
          <div>
            <span>{login} </span>
            <button className={classes.logout} onClick={LogoutAuthThunkCreator}>
              Log out
            </button>
          </div>
        ) : (
          <NavLink to={'/login'}>Login, Hero</NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
