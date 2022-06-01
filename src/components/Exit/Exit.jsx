import React from 'react';
import { withAuthRedirect } from '../../hoc/AuthReduser';
import './Exit.module.css';

const Dialog = () => {
  return <div>Exit</div>;
};

export default withAuthRedirect(Dialog);
