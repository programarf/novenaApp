import React from 'react';
//import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { ListMenu } from './style';
import { LiItem } from '../GlobalStyles';


function MenuList({ location }) {
  return (
    <div>
      <ul>
        <LiItem>
          <Link to="/novena/">Novenas</Link>
        </LiItem>
        <LiItem>
          <Link to="/villancicos/">Villancicos</Link>
        </LiItem>
        <LiItem >
          <Link to="/recipes/">Resetas</Link>
        </LiItem>
      </ul>
    </div>
  );
}

export default MenuList;