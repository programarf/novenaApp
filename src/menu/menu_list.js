import React from 'react';

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { ListMenu } from './style';
import { LiItem } from '../GlobalStyles';


function MenuList({ location }) {
  return (
    <ListMenu>
      <ul>
        <LiItem primary>
          <Link to="/novena">novenas</Link>
        </LiItem>
        <LiItem >
          <Link to="/villancicos">villancicos</Link>
        </LiItem>
       {/*  <LiItem fg>
          <Link to="/">home</Link>
        </LiItem>
        <LiItem>
          <Link to="/">Descarga tu favorito</Link>
        </LiItem> */}
      </ul>
    </ListMenu>
  );
}

export default MenuList;