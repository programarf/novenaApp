import React, { useContext } from 'react';
import RoutePage from './route_page';
import {AppMain, Title } from './style';
import { MenuContext } from "react-flexible-sliding-menu";
import Menu from '../menu/index';


// imagenes
import logo from "../images/comparte-navidad.png";
import superRicas from "../images/super-ricas.png";
import todoRico from "../images/todo-rico.png";

function Home(){
  const { toggleMenu } = useContext(MenuContext);
  return (
    <AppMain>
      <div className="wrapper">
        <button onClick={toggleMenu} className="primary-button navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="picture">
          <img src={logo} alt="" />
        </div>
        {/* <Title><span>Comparte</span> en navidas con </Title> */}
        <div className="columns">
          <div className="columns-items">
            <img src={superRicas} alt="" />
          </div>
          <div className="columns-items">
            <img src={todoRico} alt="" />
          </div>
        </div>
        <Menu
          type="1">
        </Menu>
        <RoutePage/>
      </div>
    </AppMain>
  )
};



export default Home;
