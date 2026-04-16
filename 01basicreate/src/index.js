import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const anotherUser = "Armish"
const reactElement = React.createElement(
  'a',
  {
    href : 'https://google.com',
    target : '_blank'
  },
  'Click me to visit Google',
  anotherUser
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
reactElement

);