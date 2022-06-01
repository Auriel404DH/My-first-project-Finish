import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import classes from './../../Profile.module.css';
import { dateSchema } from '../../../FormValidation/LoginFormSchema';

const MyInformEdit = ({ updateDataThunk, toEditMode }) => {
  const onSubmit = (data) => {
    updateDataThunk(data);
    toEditMode();
  };

  const initVal = {
    lookingForAJob: '',
    lookingForAJobDescription: '',
    aboutMe: '',
    fullName: '',
    date: '',
  };

  return (
    <div>
      <Formik initialValues={initVal} onSubmit={onSubmit} validationSchema={dateSchema}>
        {
          <Form>
            <div>
              <Field
                className={classes.formName}
                type={'text'}
                name={'fullName'}
                placeholder={'Enter your name'}
              />
            </div>
            <ErrorMessage name={'fullName'} component="div" />
            <div className={classes.formNameCheck}>
              <span>Looking a Job?</span>
              <Field type={'checkbox'} name={'lookingForAJob'} />
            </div>
            <div>
              <Field
                className={classes.formName}
                type={'text'}
                name={'lookingForAJobDescription'}
                placeholder={'Enter your skills'}
              />
            </div>
            <ErrorMessage
              className={classes.err}
              name={'lookingForAJobDescription'}
              component="div"
            />
            <div>
              <Field
                className={classes.formName}
                type={'text'}
                name={'aboutMe'}
                placeholder={'Some Words pls |'}
              />
            </div>
            <ErrorMessage className={classes.err} name={'aboutMe'} component="div" />
            <button className={classes.editButton} type={'submit'}>
              accept
            </button>
          </Form>
        }
      </Formik>
      <button className={classes.backButton} onClick={toEditMode}>
        Back
      </button>
    </div>
  );
};

export default MyInformEdit;
