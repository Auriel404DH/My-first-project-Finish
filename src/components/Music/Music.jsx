import React from 'react';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/AuthReduser';
import './Music.module.css';

const Music = () => {
  return <div>Music</div>;
};

export default compose(withAuthRedirect)(Music);
