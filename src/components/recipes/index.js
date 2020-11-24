import React from 'react';
import {
  Link
} from "react-router-dom";
import Constants from '../../constants/constants';
import Buy from '../../util/buy.js';
import { MenuOraciones } from '../novenas/novena';

class Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Recipes: [],
      userId: props.userId
    };
  };

  render() {
    return (
      <MenuOraciones>
        <div className="all-christmas-carols">
          <Link to={`/`}>
            X
          </Link>
          <h2><span>Villa</span>RESETAS<span>Villa</span></h2>
          <div className="list-novena">
            <ul>
              {this.state.Recipes.map(Recipe => (
                <li key={Recipe.id}>

                  {Recipe.id}
                  <Link to={`/recetas/${Recipe.id}`}>
                    <button>{Recipe.title}</button>
                  </Link>
                </li>
              ))}
            </ul>
            <Buy url="#"></Buy>
          </div>
        </div>
      </MenuOraciones>
    );
  }
  componentDidMount() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    let url = Constants.APP_CHRISTMAS_RECIPES_POSTS;
    fetch(proxyUrl+url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          Recipes: data.reverse()
        });
      })
  }

}

export default Recipes;