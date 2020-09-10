import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const RootEl = document.createElement('div');
ReactDOM.render(<App />, RootEl);
document.body.appendChild(RootEl);
setTimeout(() => {
    import(/*webpackChunkName:"about"*/'./containers/About');

}, 1000);
setTimeout(() => {
    import(/*webpackChunkName:"detail"*/'./containers/Detail');

}, 1000)

