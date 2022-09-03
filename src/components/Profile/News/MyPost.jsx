import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import classes from './MyNew.module.css';
import New from './New';
import { profilePostFormSchema } from '../../FormValidation/LoginFormSchema';
import { addPost } from '../../../redux/pReduser';
import { useDispatch, useSelector } from 'react-redux';

const Window = () => {
  const dispatch = useDispatch();

  const { profileData } = useSelector((ProfilePage) => {
    console.log(ProfilePage);
    return {
      profileData: ProfilePage.ProfilePage.profileData,
    };
  });


  let postsElements = profileData.map((p) => {
    return <New message={p.message} key={p.id} />;
  });

  let addPostF = (text) => {
    dispatch(addPost(text));
  };

  return (
    <div className={classes.content__news}>
      <div className={classes.news__title}>My posts</div>
      <Formik
        initialValues={{ post: '' }}
        onSubmit={(values) => {
          addPostF(values.post);
        }}
        validationSchema={profilePostFormSchema}
      >
        <Form>
          <div>
            <Field
              type={'text'}
              name={'post'}
              className={classes.news__body}
              placeholder={'Your post...'}
            />
          </div>
          <ErrorMessage name="post" />
          <button className={classes.news__button} type={'submit'}>
            Post
          </button>
        </Form>
      </Formik>
      {postsElements}
    </div>
  );
};

export default Window;
