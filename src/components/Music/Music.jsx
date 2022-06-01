import React from 'react';
import { withAuthRedirect } from '../../hoc/AuthReduser';
import './Music.module.css';

const Music = () => {
  return <div>Music</div>;
};

export default withAuthRedirect(Music);
