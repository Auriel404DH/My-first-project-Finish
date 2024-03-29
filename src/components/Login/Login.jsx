import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginFormSchema } from '../FormValidation/LoginFormSchema';
import classes from './Login.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { LoginAuthThunkCreator } from '../../redux/autReduser';
import { Navigate } from 'react-router-dom';

const LoginContainer = () => {
  const dispatch = useDispatch();

  const { isAuth, captchaURL } = useSelector(({ auth }) => {
    return {
      isAuth: auth.isAuth,
      captchaURL: auth.captchaURL,
    };
  });

  if (isAuth) {
    return <Navigate to={'/Profile'} />;
  }

  const onsubmit = (values, { setSubmitting, setStatus }) => {
    dispatch(
      LoginAuthThunkCreator(
        values.email,
        values.password,
        values.rememberMe,
        values.captcha,
        setStatus,
      ),
    );
    setSubmitting(false);
  };

  const initval = { email: '', password: '', rememberMe: false };

  return (
    <div className={classes.Login}>
      <h1>Login</h1>
      <Formik initialValues={initval} onSubmit={onsubmit} validationSchema={loginFormSchema}>
        {({ status }) => (
          <Form>
            <div>
              <Field name="email" placeholder={'e-mail'} className={classes.form} />
            </div>
            <ErrorMessage name="email" className={classes.errorE} component="div" />

            <div className={classes.line}>
              <Field
                type={'password'}
                name={'password'}
                placeholder={'password'}
                className={classes.form}
              />
            </div>
            <ErrorMessage name="password" className={classes.errorE} component="div" />

            <div>
              <Field type={'checkbox'} name={'rememberMe'} />
              <label htmlFor={'rememberMe'}> remember me </label>
            </div>
            {captchaURL && <img src={captchaURL} alt={'#'} />}
            {captchaURL && <Field type={'captcha'} name={'captcha'} />}
            <ErrorMessage name="captcha" className={classes.errorE} component="div" />
            <div className={classes.erroror}>{status}</div>
            <button type={'submit'} className={classes.sub}>
              Go
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginContainer;
