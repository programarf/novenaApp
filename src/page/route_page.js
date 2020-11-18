import React from 'react';
import {
  BrowserRouter as
    Switch,
  Route,
  Link
} from "react-router-dom";

import MenuList from '../menu/menu_list';
import { Wrapper } from './style';
import ChristmasNovena from '../components/novenas/christmas_novena';
import DayNovena from '../components/novenas/day_novena';
import DayHome from '../components/novenas/day_home';
import DayDetail from '../components/novenas/day_detail';
import Prayers from '../components/prayers/prayers';
import Christmascarols from '../components/christmascarols/';
import ChismascarolsDetails from '../components/christmascarols/chismascarols_details';
import Recipes from '../components/recipes'
import RecipesDetails from '../components/recipes/recipes_details'



function RoutePage({ location }) {
  return (
    <Wrapper>
      <section className="route-section">
        <Switch>
          {/*  <Route
              exact path="/novena"
            /> */}
          <Route path="/novena/"
            render={() => <ChristmasNovena />}>

          </Route>
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
            exact path="/villancicos/"
            render={(props) => <Christmascarols {...props} />}
          />
          <Route
            exact path="/villancico/:postId"
            render={(props) => <ChismascarolsDetails {...props} />}
          />
          <Route
            exact path="/recipes/"
            render={(props) => <Recipes {...props} />}
          />
          <Route
            exact path="/recipe/:postId"
            render={(props) => <RecipesDetails {...props} />}
          />
        </Switch>
      </section>
    </Wrapper>
  );
}

export default RoutePage;