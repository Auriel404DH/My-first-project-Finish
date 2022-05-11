import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './App';

it('Render is Fine', () => {
  const divka = document.createElement('div');
  ReactDOM.render(<MainApp />, divka);
  ReactDOM.unmountComponentAtNode(divka);
});
