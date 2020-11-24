import React from 'react';
import {
  Link
} from "react-router-dom";
import Constants from '../../constants/constants';
import Buy from '../../util/buy.js';
import { StyleNovena } from './../novenas/novena';

// imagenes
import cantaVillancicos from "./../../assets/img/canta villancicos.png";

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
      <StyleNovena>
        <div className="day-home-wrap">
          <div className="flex">
            <Link to={`/villancicos`} className="close">
              <svg xmlns="http://www.w3.org/2000/svg" width="15.795" height="16.618" viewBox="0 0 15.795 16.618">
                <g transform="translate(1496.152 -2409.058)">
                  <rect width="19.806" height="3.127" rx="1.564" transform="translate(-1493.865 2409.058) rotate(47)" fill="#fff"/>
                  <rect width="19.806" height="3.127" rx="1.564" transform="translate(-1480.358 2411.191) rotate(133)" fill="#fff"/>
                </g>
              </svg>
            </Link>
          </div>
          <div className="img-comparte">
              <img src={cantaVillancicos} alt="" />
            </div>
          {/* <h2><span>Villa</span>Villaaaaa<span>Villa</span></h2> */}
          <div className="list-novena">
            <ul>
              {this.state.christmascarols.map(christmascarol => (
                <li key={christmascarol.id}>
                  <Link to={`/villancico/${christmascarol.id}`}> {christmascarol.title} </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="comparte">
            <p>Compra aquí todos los productos <br/>Super Ricas y Todo Rico</p>
            <Buy url="#"></Buy>
          </div>
          <div className="arrow"></div>
        </div>
      </StyleNovena>
    );
  }
  componentDidMount() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    let url = Constants.APP_CHRISTMAS_CAROLS_POSTS;
    fetch(proxyUrl+url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          christmascarols: data.reverse()
        });
      })
  }

}

export default Christmascarols;