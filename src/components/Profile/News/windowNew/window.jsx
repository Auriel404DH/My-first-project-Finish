import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import classes from './../MyNew.module.css';
import New from './../New/New';
import { profilePostFormSchema } from '../../../FormValidation/LoginFormSchema';

const Window = (props) => {
  // let newPostElement = React.createRef();

  let postsElements = props.profileData.map((p) => <New message={p.message} key={p.id} />);

  let addPost = (text) => {
    props.addPost(text);
    // props.changeText('');
  };

  return (
    <div className={classes.content__news}>
      <div className={classes.news__title}>My posts</div>
      <Formik
        initialValues={{ post: '' }}
        onSubmit={(values) => {
          addPost(values.post);
        }}
        validationSchema={profilePostFormSchema}
      >
        <Form>
          <div>
            <Field
              type={'text'}
              name={'post'}
              className={classes.news__body}
              placeholder={'Your post'}
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
