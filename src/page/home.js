import React from 'react';
import RoutePage from './route_page';
//import { MenuContext } from "react-flexible-sliding-menu";
import {AppMain, Title } from './style'

function Home(){
  return (
    <AppMain>
      <Title><span>Comparte</span> en navidas con </Title>
      <div className="image">logos</div>
      <RoutePage/>
    </AppMain>
  )
};



export default Home;
