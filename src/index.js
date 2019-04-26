import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import socketIOClient from "socket.io-client";

//Estableciendo conexión socket
window.socket = socketIOClient('https://app-desafio-ripley.herokuapp.com/');

window.socket.on('connect',function(){
    console.log('cliente conectado')
})

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
