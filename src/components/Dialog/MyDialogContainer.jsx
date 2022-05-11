// import React from 'react';
import './Dialog.module.css';
import Dialog from './Dialog';
// import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { AddMessageThunkCreator } from './../../redux/dReduser';
import { withAuthRedirect } from '../../hoc/AuthReduser';
import { compose } from 'redux';
// const MyDialog = (props) => {
//   let linkArea = React.createRef();

//   const addMessage = () => {
//     let text = linkArea.current.value;
//     props.store.dispatch({ type: 'SEND-MESSAGE', userText: text });
//     props.store.dispatch({ type: 'CHANGE-MESSAGE', userText: '' });
//   };

//   const changeText = () => {
//     let text = linkArea.current.value;
//     props.store.dispatch({ type: 'CHANGE-MESSAGE', userText: text });
//   };

//   return (
//     <Dialog
//       diafirst={props.store.getState().DialogPage.dialogData}
//       mesfirst={props.store.getState().DialogPage.messagesData}
//       chacha={props.store.getState().DialogPage.MessagesText}
//       MessList={props.store.getState().DialogPage.myMessagesData}
//       addMessage={addMessage}
//       changeText={changeText}
//       link={linkArea}
//     />
//   );
// };

let mapStateToProps = (state) => {
  return {
    diafirst: state.DialogPage.dialogData,
    mesfirst: state.DialogPage.messagesData,
    textAreaValue: state.DialogPage.MessagesText,
    MessList: state.DialogPage.myMessagesData,
  };
};

// let mapDispatchToProps = (dispatch) => {
//   // dispatch = props.store.dispatch
//   //
//   return {
//     addMessage: (text) => {
//       dispatch({ type: 'SEND-MESSAGE', userText: text });
//       dispatch({ type: 'CHANGE-MESSAGE', userText: '' });
//     },
//     changeText: (text) => {
//       dispatch({ type: 'CHANGE-MESSAGE', userText: text });
//     },
//   };
// };

export default compose(
  connect(mapStateToProps, {
    AddMessageThunkCreator,
  }),
  withAuthRedirect,
)(Dialog);
