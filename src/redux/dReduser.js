const SEND_MESSAGE = 'dialog/SEND-MESSAGE';
const CHANGE_MESSAGE = 'dialog/CHANGE-MESSAGE';

let initialState = {
  messagesData: [
    {
      id: 1,
      message: 'Hi, Soul',
      src: 'https://sun9-37.userapi.com/impg/c854220/v854220709/1e5bb9/SMr3QDST6h0.jpg?size=392x374&quality=96&sign=28728e549cbd99ea34e8ebfddac93265&type=album',
    },
    {
      id: 2,
      message: 'It is me',
      src: 'https://sun9-37.userapi.com/impg/c854220/v854220709/1e5bb9/SMr3QDST6h0.jpg?size=392x374&quality=96&sign=28728e549cbd99ea34e8ebfddac93265&type=album',
    },
    {
      id: 3,
      message: "Your's friend",
      src: 'https://sun9-37.userapi.com/impg/c854220/v854220709/1e5bb9/SMr3QDST6h0.jpg?size=392x374&quality=96&sign=28728e549cbd99ea34e8ebfddac93265&type=album',
    },
    {
      id: 4,
      message: 'Auriel',
      src: 'https://sun9-37.userapi.com/impg/c854220/v854220709/1e5bb9/SMr3QDST6h0.jpg?size=392x374&quality=96&sign=28728e549cbd99ea34e8ebfddac93265&type=album',
    },
    {
      id: 5,
      message: 'Do you remember me?',
      src: 'https://sun9-37.userapi.com/impg/c854220/v854220709/1e5bb9/SMr3QDST6h0.jpg?size=392x374&quality=96&sign=28728e549cbd99ea34e8ebfddac93265&type=album',
    },
  ],
  dialogData: [
    {
      id: 1,
      key: 0,
      name: 'Soul',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgnNc5EA5lx65MZrAyxVBuYtY9k3mtWA8_Fw&usqp=CAU',
    },
    {
      id: 2,
      key: 1,
      name: 'Karmony',
      src: 'https://sun9-53.userapi.com/impf/c638516/v638516628/2bd3f/gFbAzu5UXi4.jpg?size=289x405&quality=96&sign=9ca11d991f23d7ec1911e0e8c1500605&type=album',
    },
    {
      id: 3,
      key: 2,
      name: 'Haid',
      src: 'https://sun9-10.userapi.com/impg/awi3Y5ZkPuUOdS6mM9c0g4j7ONDCa6DSXmGENg/bPAuguiPq64.jpg?size=1280x1688&quality=96&sign=c9e30fc62395c00dee9c625a90681efe&type=album',
    },
    {
      id: 4,
      key: 3,
      name: 'Auriel',
      src: 'https://sun9-37.userapi.com/impg/c854220/v854220709/1e5bb9/SMr3QDST6h0.jpg?size=392x374&quality=96&sign=28728e549cbd99ea34e8ebfddac93265&type=album',
    },
  ],
  myMessagesData: [],
  MessagesText: '',
};

const messageReduser = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newMessage = {
        id: 88,
        message: action.userText,
      };

      return {
        ...state,
        myMessagesData: [...state.myMessagesData, newMessage],
        MessagesText: '',
      };
    }

    case CHANGE_MESSAGE: {
      return {
        ...state,
        MessagesText: action.userText,
      };
    }
    default:
      return state;
  }
};

const sendMessage = (userText) => ({
  type: SEND_MESSAGE,
  userText,
});
const changeMessage = (userText) => ({
  type: CHANGE_MESSAGE,
  userText
})

export const AddMessageThunkCreator = (userText) => {
  return (dispatch) => {
    dispatch(sendMessage(userText))
    dispatch(changeMessage(''))
  }
}

export default messageReduser;
