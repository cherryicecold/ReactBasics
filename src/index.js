import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reactDom from 'react-dom';
import Main1 from './components/Main1';
import Contacts from './components/Contacts';
import Joke from './components/Joke';
//import Appclass from './classes/AppClass';
import Appclass1 from './classes/AppClass'
import AppState from './classes/AppState';
import AppState2 from './classes/AppState2';

import MyInfo from './components/MyInfo';
import Footer from './components/Footer';
import AppEvent from './events/AppEvent';
import CounterEvent from './events/CounterEvent'
import ConditionalApp from './conditional/ConditionalApp.js'
//A:\React\learnreact\src\conditional\ConditionalApp.js
import LoginApp from './events/LoginApp';
import FormOneApp from './forms/FormOneApp';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



reactDom.render(<Main1/>, document.getElementById('root'));
reactDom.render(<Contacts/>, document.getElementById('root2'));
reactDom.render(<Joke/>, document.getElementById('root3'));
reactDom.render(<AppEvent/>, document.getElementById('root4'));
//reactDom.render(<Footer/>, document.getElementById('foot'));CounterEvent
reactDom.render(<CounterEvent/>, document.getElementById('root5'));  //ConditionalApp
reactDom.render(<LoginApp/>, document.getElementById('root6'));
reactDom.render(<FormOneApp/>, document.getElementById('root7'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
