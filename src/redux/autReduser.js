import { GuardAPI, HeaderAPI } from '../api/api';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL = 'auth/GET_CAPTCHA_URL';

let initialState = {
  userID: null,
  email: null,
  login: null,
  isAuth: false,
  captchaURL: null,
};

const autReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
      };
    }
    case GET_CAPTCHA_URL: {
      return {
        ...state,
        captchaURL: action.data,
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

const getCaptchaUrl = (url) => ({ type: GET_CAPTCHA_URL, data: { url } });

export const setAuthThunkCreator = () => async (dispatch) => {
  let response = await HeaderAPI.getHeaderRoom();

  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const LoginAuthThunkCreator =
  (email, password, rememberMe, captcha, setStatus) => async (dispatch) => {
    let response = await HeaderAPI.login(email, password, rememberMe, captcha);

    if (response.data.resultCode === 0) {
      dispatch(setAuthThunkCreator());
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptchaThunk());
      }
      setStatus(response.data.messages);
    }
  };

export const LogoutAuthThunkCreator = () => async (dispatch) => {
  let response = await HeaderAPI.logout();

  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export const getCaptchaThunk = () => async (dispatch) => {
  let response = await GuardAPI.getCaptcha();
  const captchaURL = response.data.url;
  dispatch(getCaptchaUrl(captchaURL));
};

export default autReduser;
