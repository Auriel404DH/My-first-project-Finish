import React from 'react';
import { withAuthRedirect } from '../../hoc/AuthReduser';
import './News.module.css';

const News = () => {
  return <div>News</div>;
};

export default withAuthRedirect(News);
