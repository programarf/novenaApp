import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MenuProvider from "react-flexible-sliding-menu";
import MenuMain from './menu/menu_main';
import { BrowserRouter as Router } from "react-router-dom";




ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MenuProvider MenuComponent={MenuMain} animation="push">
        <App />
      </MenuProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
