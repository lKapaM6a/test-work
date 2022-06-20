import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {store} from './store/store'

// multi lang
import './i18n';

// Application
import App from './App';

// Styles
import './assets/styles/main.scss'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('kibernetiki')
);

