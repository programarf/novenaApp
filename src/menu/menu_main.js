import React, { useContext } from "react";
import { MenuContext } from "react-flexible-sliding-menu";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {Collapse } from './style';

function MenuMain(){
  const { closeMenu } = useContext(MenuContext);
  return (
    <Collapse>
      <button onClick={closeMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
      <nav>
        <ul>
          <li onClick={closeMenu}>
            <Link to="/novena/">Novenas</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/villancicos">villancicos</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/recipes/">Resetas</Link>
          </li>
        </ul>
      </nav>
    </Collapse>
  );
};

export default MenuMain;