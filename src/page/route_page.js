import React from 'react';
import {
  BrowserRouter as
  Switch,
  Route,
  Link
} from "react-router-dom";

import MenuList from  '../menu/menu_list';
import { Wrapper} from './style';
import ChristmasNovena from '../components/novenas/christmas_novena';
import DayNovena from '../components/novenas/day_novena';
import DayHome from '../components/novenas/day_home';
import DayDetail from '../components/novenas/day_detail';
import Prayers from '../components/prayers/prayers';
import Christmascarols from '../components/christmascarols/';

function RoutePage({ location }) {
  return (
    <Wrapper>
      <ul>
        <li >
          <Link to="/novena">novenas</Link>
        </li>
        {/*  <LiItem fg>
          <Link to="/">home</Link>
        </LiItem>
        <LiItem>
          <Link to="/">Descarga tu favorito</Link>
        </LiItem> */}
      </ul>
      <MenuList/>
      <section className="route-section">
        <Switch>
            <Route
              exact path="/novena"
              render={(props) => <ChristmasNovena {...props}/>}
            />
            <Route
              exact path="/novena/:postId"
              render={(props) => <DayNovena {...props} />}
            />
            <Route
              exact path="/novena/home-dia/:postId"
              render={(props) => <DayHome {...props} />}
            />
            <Route
              exact path="/novena/dia/:postId"
              render={(props) => <DayDetail {...props} />}
            />
            <Route
              exact path="/oracion/:postId"
              render={(props) => <Prayers {...props} />}
            />
            <Route
              exact path="/villancicos"
              render={(props) => <Christmascarols {...props} />}
            />
          </Switch>
      </section>
    </Wrapper>
  );
}

export default RoutePage;