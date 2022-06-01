import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { LogoutAuthThunkCreator } from '../../redux/autReduser';
import classes from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();

  const { isAuth, login } = useSelector(({ auth }) => {
    return {
      isAuth: auth.isAuth,
      login: auth.login,
    };
  });

  const logoutClick = () => {
    dispatch(LogoutAuthThunkCreator());
  };

  return (
    <div className={classes.header}>
      <img src="https://rakit.ru/wp-content/uploads/2016/02/Pepsi-logo.png" alt="#" />
      <div>
        <div className={classes.header__news}>А знали ли вы, что на самом деле...</div>
      </div>
      <div className={classes.login_block}>
        {isAuth ? (
          <div>
            <span>{login} </span>
            <button className={classes.logout} onClick={logoutClick}>
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
