import React from 'react';
import classes from './Dialog.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import MessageMY from './Send/Message';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { dialogFormSchema } from '../FormValidation/LoginFormSchema';
import { useDispatch, useSelector } from 'react-redux';
import { AddMessageThunkCreator } from '../../redux/dReduser';
import { withAuthRedirect } from '../../hoc/AuthReduser';

const Dialog = () => {
  const dispatch = useDispatch();

  const { diafirst, mesfirst, MessList } = useSelector(({ DialogPage }) => {
    return {
      diafirst: DialogPage.dialogData,
      mesfirst: DialogPage.messagesData,
      textAreaValue: DialogPage.MessagesText,
      MessList: DialogPage.myMessagesData,
    };
  });

  let dialogElements = diafirst.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} src={dialog.src} />
  ));

  let messagesElements = mesfirst.map((element) => (
    <Message text={element.message} id={element.id} key={element.id} src={element.src} />
  ));

  let NewMessList = MessList.map((element) => {
    return <MessageMY key={element.id} id={element.id} message={element.message} />;
  });

  let addMessage = (text) => {
    dispatch(AddMessageThunkCreator(text));
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialog__items}>{dialogElements}</div>
      <div className={classes.dialog__messages}>{messagesElements}</div>
      <div className={classes.dialog__send}>
        <div>{NewMessList}</div>
        <Formik
          initialValues={{ message: '' }}
          onSubmit={(value) => {
            addMessage(value.message);
          }}
          validationSchema={dialogFormSchema}
        >
          <Form>
            <div>
              <Field
                type={'text'}
                name={'message'}
                className={classes.textArea}
                placeholder={'Your message'}
              />
            </div>
            <ErrorMessage name="message" />
            <button className={classes.buttON} type={'submit'}>
              Send
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default withAuthRedirect(Dialog);
