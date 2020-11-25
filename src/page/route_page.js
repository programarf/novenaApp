import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
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



function RoutePage({ props }) {
  return (
    <Wrapper>
      <section className="route-section">
        <Switch>
          <Route
            exact path="/novenas"
            render={(props) =><ChristmasNovena />}
          />
          <Route
            exact path="/novenas/:Name"
            render={(props) => <DayNovena {...props} />}
          />
          <Route
            path="/novenas/:dia/oraciones/:Name"
            render={(props) => <DayDetail {...props} />}
          />
          <Route
            exact path="/novenas/:dia/oraciones"
            render={(props) => <DayHome {...props} />}
          />
        {/*   <Route
            exact path="/novena/oracion/:Name"
            render={(props) => <Prayers {...props} />}
          /> */}
          <Route
            exact path="/villancicos/">
            <Christmascarols />
          </Route>
          <Route
            path="/villancicos/:Name"
            render={(props) => <ChismascarolsDetails {...props} />}
          />
          <Route
            exact path="/recetas/">
            <Recipes />
          </Route>
          <Route
            path="/recetas/:postId"
            render={(props) => <RecipesDetails {...props} />}>
          </Route>
        </Switch>
      </section>
    </Wrapper>
  );
}

export default RoutePage;