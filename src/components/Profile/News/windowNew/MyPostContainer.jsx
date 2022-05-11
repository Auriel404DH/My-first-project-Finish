import { connect } from 'react-redux';
import Window from './window';
import { addPost } from './../../../../redux/pReduser';

// const MyPostContainer = (props) => {
//   let OnaddPost = (text) => {
//     props.store.dispatch({ type: 'ADD-POST', userText: text });
//     props.store.dispatch({ type: 'CHANGE-TEXT', userText: '' });
//   };

//   let OnchangeFuckingText = (text) => {
//     props.store.dispatch({ type: 'CHANGE-TEXT', userText: text });
//   };

//   return (
//     <Window
//       changeFuckingText={OnchangeFuckingText}
//       addPost={OnaddPost}
//       posts={props.store.getState().ProfilePage.profileData}
//       newPostText={props.store.getState().ProfilePage.changeText}
//     />
//   );
// };

let mapStateToProps = (state) => {
  return {
    profileData: state.ProfilePage.profileData,
    // changeTextS: state.ProfilePage.changeText,
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     addPost: (text) => {
//       dispatch({ type: 'ADD-POST', userText: text });
//       dispatch({ type: 'CHANGE-TEXT', userText: '' });
//     },
//     changeFuckingText: (text) => {
//       dispatch({ type: 'CHANGE-TEXT', userText: text });
//     },
//   };
// };

const MYPostContainer = connect(mapStateToProps, { addPost })(Window);

export default MYPostContainer;
