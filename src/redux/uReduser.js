import { usersAPI } from '../api/api';
import { updateObjectInArray } from '../components/common/objectHelper';

const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'users/TOGGLE_IS_FOLLOWING';

let initialState = {
  users: [],
  pageSize: 25,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userID, 'id', { friend: true }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userID, 'id', { friend: false }),
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.count,
      };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOWING: {
      return {
        ...state,
        followingInProgress: action.isProgressIdet
          ? [...state.followingInProgress, action.idUser]
          : state.followingInProgress.filter((id) => id !== action.idUser),
      };
    }
    default:
      return state;
  }
};

export const friendYes = (userID) => ({ type: FOLLOW, userID });
export const friendNo = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalCount,
});
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleIsFollowing = (isProgressIdet, idUser) => ({
  type: TOGGLE_IS_FOLLOWING,
  isProgressIdet,
  idUser,
});

export const getUsersThunkCreator = (currentPageS, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(currentPageS));

  let data = await usersAPI.getUsers(currentPageS, pageSize);

  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
};

const friendYesNo = async (dispatch, id, apiMethod, actionCerater) => {
  dispatch(toggleIsFollowing(true, id));

  let response = await apiMethod(id);

  if (response.data.resultCode === 0) {
    dispatch(actionCerater(id));
  }

  dispatch(toggleIsFollowing(false, id));
};

export const unfollowThunkCreator = (id) => async (dispatch) => {
  let apiMethod = usersAPI.unfollow.bind(usersAPI);
  friendYesNo(dispatch, id, apiMethod, friendNo);
};

export const followThunkCreator = (id) => async (dispatch) => {
  let apiMethod = usersAPI.follow.bind(usersAPI);
  friendYesNo(dispatch, id, apiMethod, friendYes);
};

export default usersReduser;
