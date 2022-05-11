import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './App';

let reRender = () => {
  ReactDOM.render(<MainApp />, document.getElementById('root'));
};

reRender();
