const QWERTY = 'sidebar/QWE_CHANGER';

let initialState = {
  qwe: '',
};

const sidebarReduser = (state = initialState, action) => {
  switch (action.type) {
    case QWERTY: {
      return {
        ...state,
        qwe: action.text,
      };
    }
    default:
      return state;
  }
};

const qwertyACT = (textMy) => ({ type: QWERTY, text: textMy });

export const qwertyThunkCreator = (text) => {
  return (dispatch) => {
    dispatch(qwertyACT(text));
  };
};

export default sidebarReduser;
