import React from 'react';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/AuthReduser';
import './News.module.css';

const News = () => {
  return <div>News</div>;
};

export default compose(withAuthRedirect)(News);
