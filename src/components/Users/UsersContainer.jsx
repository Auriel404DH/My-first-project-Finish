import React from 'react';
import Users from './Users';
import Preload from './../common/Preloader/preload';
import { withAuthRedirect } from '../../hoc/AuthReduser';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersThunkCreator } from '../../redux/uReduser';
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from '../../redux/uSelector';

const UsersAPIComponent = () => {
  const dispatch = useDispatch();

  const { isFetching, users, pageSize, totalUsersCount, currentPageS, followingInProgress } =
    useSelector((state) => {
      return {
        isFetching: getIsFetching(state),
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPageS: getCurrentPage(state),
        followingInProgress: getFollowingInProgress(state),
      };
    });

  React.useEffect(() => {
    dispatch(getUsersThunkCreator(currentPageS, pageSize));
  }, []);

  const onPageChanged = (e) => {
    dispatch(getUsersThunkCreator(e.target.innerHTML, pageSize));
  };

  return (
    <>
      {isFetching ? <Preload /> : null}
      <Users
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        users={users}
        onPageChanged={onPageChanged}
        followingInProgress={followingInProgress}
      />
    </>
  );
};

export default withAuthRedirect(UsersAPIComponent);
