import React from 'react';
// import { Navigate } from 'react-router-dom';
import './Dialog.module.css';
import classes from './Dialog.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import MessageMY from './Send/Message';
// import { Form, Field, useFormik } from 'formik';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { dialogFormSchema } from '../FormValidation/LoginFormSchema';

const Dialog = (props) => {
  let dialogElements = props.diafirst.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} src={dialog.src} />
  ));

  let messagesElements = props.mesfirst.map((element) => (
    <Message text={element.message} id={element.id} key={element.id} src={element.src} />
  ));

  let NewMessList = props.MessList.map((element) => {
    return <MessageMY key={element.id} id={element.id} message={element.message} />;
  });

  let addMessage = (text) => {
    props.AddMessageThunkCreator(text);
  };

  // const formiks = useFormik({
  //   initialValues: { message: '' },
  //   onSubmit: (values) => {
  //     addMessage(values.message);
  //   },
  //   validationSchema: dialogFormSchema,
  //   // validate: (values) => {
  //   //   const errors = {};
  //   //   if (values.message.length > 300) {
  //   //     errors.message = "Wo, you're so cool, but put a 'send' button please";
  //   //     butON=true
  //   //   }
  //   //   return errors;
  //   // },
  // });

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

export default Dialog;
