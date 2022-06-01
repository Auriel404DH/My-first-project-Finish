import { profileAPI } from './../api/api';

let SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
let ADD_POST = 'profile/ADD-POST';
let SET_STATUS = 'profile/SET_STATUS';
let SET_PHOTO = 'profile/SET_PHOTO';
let PROFILE_DATA = 'profile/PROFILE_DATA';

let initialState = {
  profileData: [
    { id: 1, message: "It's my first post, yoho ^-)" },
    { id: 2, message: 'Hello, my name is Adam' },
    { id: 3, message: 'I like cakes' },
    { id: 4, message: 'I want to tell you about Gagarin' },
    { id: 5, message: 'I love GUAP' },
  ],
  profile: null,
  status: '',
};

const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 6,
        message: action.userText,
      };
      let stateCopy = { ...state };
      stateCopy.profileData = [...state.profileData, newPost];

      return stateCopy;
    }
    case SET_USER_PROFILE: {
      let stateCopy = { ...state };

      stateCopy.profile = action.profile;

      return stateCopy;
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case SET_PHOTO: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    }
    case PROFILE_DATA: {
      action = action.data;
      return {
        ...state,
        profile: {
          ...state.profile,
          date: action.date,
          aboutMe: action.aboutMe,
        },
      };
    }
    default:
      return state;
  }
};

const setStatus = (status) => ({ type: SET_STATUS, status });
const setPhotoSucsess = (photos) => ({ type: SET_PHOTO, photos });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const addPost = (userText) => ({ type: ADD_POST, userText });

export const getProfileThunkCreator = (userId) => async (dispatch) => {
  let response = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const setStatusThunk = (userID) => async (dispatch) => {
  let response = await profileAPI.getStatus(userID);
  dispatch(setStatus(response.data));
};

export const updateStatusThunk = (status) => async (dispatch) => {
  try {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateProfilePhoto = (photo) => async (dispatch) => {
  let response = await profileAPI.updatePhoto(photo);
  if (response.data.resultCode === 0) {
    dispatch(setPhotoSucsess(response.data.data.photos));
  }
};

export const updateDataThunk = (data) => async (dispatch, getState) => {
  const userID = getState().auth.userId;
  let response = await profileAPI.updateData(data);
  if (response.data.resultCode === 0) {
    dispatch(getProfileThunkCreator(userID));
  }
};

export default profileReduser;
