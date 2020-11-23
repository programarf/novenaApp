import React from 'react';
import {
  Link
} from "react-router-dom";
import Constants from '../../constants/constants';
import Buy from '../../util/buy.js';
import { Oracion } from './../novenas/novena';

class Christmascarols extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      christmascarols: [],
      userId: props.userId
    };
  };

  render() {
    return (
      <Oracion>
        <div className="all-christmas-carols">
          <Link to={`/villancicos`}>
            X
          </Link>
          <h2><span>Villa</span>Villaaaaa<span>Villa</span></h2>
          <div className="list-novena">
            <ul>
              {this.state.christmascarols.map(christmascarol => (
                <li key={christmascarol.id}>
                  <Link to={`/villancico/${christmascarol.id}`}>
                    <button>{christmascarol.title}</button>
                  </Link>
                </li>
              ))}
            </ul>
            <Buy url="#"></Buy>
          </div>
        </div>
      </Oracion>
    );
  }
  componentDidMount() {
    let url = Constants.APP_CHRISTMAS_CAROLS_POSTS;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          christmascarols: data.reverse()
        });
      })
  }

}

export default Christmascarols;