import React, { useContext } from 'react';
import RoutePage from './route_page';
import { AppMain, BtnMain, Title } from './style';
import { MenuContext } from "react-flexible-sliding-menu";
import Menu from '../menu/index';


// imagenes
import logo from "../assets/img/comparte-navidad.png";
import superRicas from "../assets/img/super-ricas.png";
import todoRico from "../assets/img/todo-rico.png";

function Home(){
  const { toggleMenu } = useContext(MenuContext);
  return (
    <AppMain>
      <div className="wrapper">
        <BtnMain onClick={toggleMenu} className="primary-button navbar-toggler btn-main">
          <span className="navbar-toggler-icon"></span>
        </BtnMain>
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
