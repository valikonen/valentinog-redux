import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import store from "./store/index";
import { addArticle } from './actions/index';

import { Provider } from 'react-redux';
window.store = store;
window.addArticle = addArticle;

store.subscribe(() => {
  console.log('Look ma, Redux')
});

store.dispatch(addArticle({
  id: Date.now(),
  title: "CFR Cluj"
}))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
