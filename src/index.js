import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const RootEl = document.createElement('div');
ReactDOM.render(<App />, RootEl);
document.body.appendChild(RootEl);
setTimeout(() => {
    import('./containers/About');

}, 1000)
