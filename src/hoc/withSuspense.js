import React from 'react';

export const withSuspense = (Component) => {
  return (props) => {
    return <Component {...props} />;
  };
};
