import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import {
  Link
} from "react-router-dom";
import Constants from '../../constants/constants';
import { Oracion } from './../novenas/novena';

class Prayers extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      postId : props.match.params.postId,
    };
  };

  render(){
    if (this.state.prayer !== undefined){
        console.log(this.state)

      return (
        <Oracion>
          <div className = "novena-detail">
            <div className="menu-oracion">
              <Link to={`/novena/home-dia/${this.state.postId}`}>
                Ver oraciones del día
              </Link>
            </div>
            <h2>{this.state.prayer[0].title}</h2>
            <div className="conte-text">{ReactHtmlParser(this.state.prayer[0].body) }</div>
            <img src={Constants.APP_DOMAIN + this.state.prayer[0].field_image}></img>
            <div className="control">
              <Link to={`/oracion/${this.state.prayer[0].field_orden}`}>
                previews
              </Link>
              <Link to={`/oracion/${this.state.prayer[0].field_orden}`}>
                Next
              </Link>
            </div>
          </div>
        </Oracion>
      );
    }else{
      return (
        <div className="loading">
          <p>Cargando...</p>
        </div>
      )
    }
  }
  componentDidMount() {
    console.log("prop", this.state );
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    let url = Constants.APP_PRAYER_POSTS + this.state.postId;
    fetch(proxyUrl+url)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          prayer: result
        });
      }
    )
  }

}

export default Prayers;