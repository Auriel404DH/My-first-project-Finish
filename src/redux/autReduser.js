import { HeaderAPI } from '../api/api';

const SET_USER_DATA = 'auth/SET_USER_DATA';

let initialState = {
  userID: null,
  email: null,
  login: null,
  isAuth: false,
};

const autReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
      };
    }

    default:
      return state;
  }
};

const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  data: { userId, email, login, isAuth },
});

export const setAuthThunkCreator = () => async (dispatch) => {
  let response = await HeaderAPI.getHeaderRoom();

  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const LoginAuthThunkCreator =
  (email, password, rememberMe, setStatus) => async (dispatch) => {
    let response = await HeaderAPI.login(email, password, rememberMe);

    if (response.data.resultCode === 0) {
      dispatch(setAuthThunkCreator());
    } else {
      setStatus(response.data.messages);
    }
  };

export const LogoutAuthThunkCreator = () => async (dispatch) => {
  let response = await HeaderAPI.logout();

  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default autReduser;
