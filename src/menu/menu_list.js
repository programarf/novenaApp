import React from 'react';
//import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { ListMenu } from './style';
import { LiItem } from '../GlobalStyles';


function MenuList({ location }) {
  return (
    <div>
      <ul>
        <li >
          <Link to="/novena/">Novenas</Link>
        </li>
        <li >
          <Link to="/villancicos/">Villancicos</Link>
        </li>
        <li >
          <Link to="/recipes/">Recipes</Link>
        </li>
       {/*  <LiItem fg>
          <Link to="/">home</Link>
        </LiItem>
        <LiItem>
          <Link to="/">Descarga tu favorito</Link>
        </LiItem> */}
      </ul>
    </div>
  );
}

export default MenuList;