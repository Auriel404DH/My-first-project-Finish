import React from 'react';
import Users from './Users';
import Preload from './../common/Preloader/preload';
import { withAuthRedirect } from '../../hoc/AuthReduser';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  toggleIsFollowing,
  getUsersThunkCreator,
  unfollowThunkCreator,
  followThunkCreator,
} from '../../redux/uReduser';
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from '../../redux/uSelector';

class UsersAPIComponent extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  // axios
  //   .get(
  //     `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPageS}&count=${this.props.pageSize}`,
  //     {
  //       withCredentials: true,
  //       headers: {
  //         'API-KEY': '4fa2671d-808c-48e7-b74b-b358db88fb27',
  //       },
  //     },
  //   )

  componentDidMount = () => {
    this.props.getUsersThunkCreator(this.props.currentPageS, this.props.pageSize);
    // this.props.toggleIsFetching(true);

    // usersAPI.getUsers(this.props.currentPageS, this.props.pageSize).then((data) => {
    //   this.props.toggleIsFetching(false);
    //   this.props.setUsers(data.items);
    //   this.props.setTotalUsersCount(data.totalCount);
    // });
  };

  onPageChanged = (e) => {
    this.props.getUsersThunkCreator(e.target.innerHTML, this.props.pageSize);

    // this.props.toggleIsFetching(true);
    // this.props.setCurrentPage(e.target.innerHTML);

    // usersAPI.getUsers(e.target.innerHTML, this.props.pageSize).then((data) => {
    //   this.props.toggleIsFetching(false);
    //   this.props.setUsers(data.items);
    // });

    // axios
    //   .get(
    //     `https://social-network.samuraijs.com/api/1.0/users?page=${e.target.innerHTML}&count=${this.props.pageSize}`,
    //     {
    //       withCredentials: true,
    //       headers: {
    //         'API-KEY': '4fa2671d-808c-48e7-b74b-b358db88fb27',
    //       },
    //     },
    //   )
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preload /> : null}
        <Users
          totalItemsCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          // friendYes={this.props.friendYes}
          // friendNo={this.props.friendNo}
          users={this.props.users}
          onPageChanged={this.onPageChanged}
          toggleIsFollowing={this.props.toggleIsFollowing}
          followingInProgress={this.props.followingInProgress}
          followThunkCreator={this.props.followThunkCreator}
          unfollowThunkCreator={this.props.unfollowThunkCreator}
        />
      </>
    );
  }
}

// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPageS: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
//   };
// };
let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPageS: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    toggleIsFollowing,
    getUsersThunkCreator,
    unfollowThunkCreator,
    followThunkCreator,
  }),
  withAuthRedirect,
)(UsersAPIComponent);
