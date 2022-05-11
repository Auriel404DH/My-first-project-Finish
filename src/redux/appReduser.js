import { setAuthThunkCreator } from './autReduser';

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS';

let initialState = {
  initialized: false,
};

const appReduser = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      return {
        ...state,
        initialized: true,
      };
    }

    default:
      return state;
  }
};

const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => {
  return async (dispatch) => {
    await dispatch(setAuthThunkCreator());
    dispatch(initializedSuccess());
  };
};

export default appReduser;
