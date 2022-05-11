// let state = {
//   MessagesPage: {
//     messagesData: [
//       {
//         id: 1,
//         message: 'Hi, Soul',
//         src: 'https://sun9-37.userapi.com/impg/c854220/v854220709/1e5bb9/SMr3QDST6h0.jpg?size=392x374&quality=96&sign=28728e549cbd99ea34e8ebfddac93265&type=album',
//       },
//       {
//         id: 2,
//         message: 'It is me',
//         src: 'https://sun9-37.userapi.com/impg/c854220/v854220709/1e5bb9/SMr3QDST6h0.jpg?size=392x374&quality=96&sign=28728e549cbd99ea34e8ebfddac93265&type=album',
//       },
//       {
//         id: 3,
//         message: "Your's friend",
//         src: 'https://sun9-37.userapi.com/impg/c854220/v854220709/1e5bb9/SMr3QDST6h0.jpg?size=392x374&quality=96&sign=28728e549cbd99ea34e8ebfddac93265&type=album',
//       },
//       {
//         id: 4,
//         message: 'Auriel',
//         src: 'https://sun9-37.userapi.com/impg/c854220/v854220709/1e5bb9/SMr3QDST6h0.jpg?size=392x374&quality=96&sign=28728e549cbd99ea34e8ebfddac93265&type=album',
//       },
//       {
//         id: 5,
//         message: 'Do you remember me?',
//         src: 'https://sun9-37.userapi.com/impg/c854220/v854220709/1e5bb9/SMr3QDST6h0.jpg?size=392x374&quality=96&sign=28728e549cbd99ea34e8ebfddac93265&type=album',
//       },
//     ],
//     dialogData: [
//       {
//         id: 1,
//         key: 0,
//         name: 'Soul',
//         src: 'https://static.zerochan.net/Alastor.%28Hazbin%29.full.2822253.jpg',
//       },
//       {
//         id: 2,
//         key: 1,
//         name: 'Karmony',
//         src: 'https://sun9-53.userapi.com/impf/c638516/v638516628/2bd3f/gFbAzu5UXi4.jpg?size=289x405&quality=96&sign=9ca11d991f23d7ec1911e0e8c1500605&type=album',
//       },
//       {
//         id: 3,
//         key: 2,
//         name: 'Haid',
//         src: 'https://sun9-10.userapi.com/impg/awi3Y5ZkPuUOdS6mM9c0g4j7ONDCa6DSXmGENg/bPAuguiPq64.jpg?size=1280x1688&quality=96&sign=c9e30fc62395c00dee9c625a90681efe&type=album',
//       },
//       {
//         id: 4,
//         key: 3,
//         name: 'Auriel',
//         src: 'https://sun9-37.userapi.com/impg/c854220/v854220709/1e5bb9/SMr3QDST6h0.jpg?size=392x374&quality=96&sign=28728e549cbd99ea34e8ebfddac93265&type=album',
//       },
//     ],
//     myMessagesData: [],
//     MessagesText: '',
//   },
//   ProfilePage: {
//     profileData: [
//       { id: 1, message: "It's my first post, yoho ^-)" },
//       { id: 2, message: 'Hello, my name is Adam' },
//       { id: 3, message: 'I like cakes' },
//       { id: 4, message: 'I want to tell you about Gagarin' },
//       { id: 5, message: 'I fuck GUAP' },
//     ],
//     changeText: 'Write something pls...',
//   },
//   SidebarPage: {},
//   dispatch(action) {
//     if (action.type === 'ADD-POST') {
//       let newPost = {
//         id: 5,
//         message: action.userText,
//       };
//       this.ProfilePage.profileData.push(newPost);
//       this.reRender(state);
//     } else if (action.type === 'CHANGE-TEXT') {
//       this.ProfilePage.changeText = action.userText;
//       this.reRender(state);
//     } else if (action.type === 'SUBSRIBE') {
//       this.reRender = action.userText;
//     } else if (action.type === 'RENDER') {
//       console.log('qeqweqweq');
//     } else if (action.type === 'SEND-MESSAGE') {
//       let newMessage = {
//         id: 2,
//         message: action.userText,
//       };
//       this.MessagesPage.myMessagesData.push(newMessage);
//       this.reRender(state);
//     } else if (action.type === 'CHANGE-MESSAGE') {
//       this.MessagesPage.MessagesText = action.userText;
//       this.reRender(state);
//     }
//   },
// };

// export default state;
