import React, { useContext } from "react";
import { MenuContext } from "react-flexible-sliding-menu";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function MenuMain(){
  const { closeMenu } = useContext(MenuContext);
  return (
    <div>
      <nav>
        <ul>
          <li onClick={closeMenu}>
            <Link to="/novena/">Novenas</Link>
          </li>
          <li>
            <Link to="/villancicos">villancicos</Link>
          </li>
          <li >
            <Link to="/recipes/">Resetas</Link>
          </li>
        </ul>
        <button onClick={closeMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </button>
      </nav>
    </div>
  )
};

export default MenuMain;