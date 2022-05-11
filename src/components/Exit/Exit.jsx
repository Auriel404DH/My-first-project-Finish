import React from 'react';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/AuthReduser';
import './Exit.module.css';

const Dialog = () => {
  return <div>Exit</div>;
};

export default compose(withAuthRedirect)(Dialog);
