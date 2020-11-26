import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import {
  Link
} from "react-router-dom";
import Constants from '../../constants/constants';
import { Oracion } from './../novenas/style';

class Prayers extends React.Component {
  constructor(props) {
    console.log(props.location.state.IdPost,"id");
    super(props);
    this.state = {
      postId: props.location.state.IdPost,
      day: props.location.state.day,
    };
  };

  render(){
    if (this.state.prayer !== undefined){
        console.log(this.state)

      return (
        <Oracion>
          <div className="novena-detail">
            <div className="menu-oracion">
              <Link to={`/novena/oraciones/${this.state.postId}`}>
                Ver oraciones del día
              </Link>
            </div>
            <h2>{this.state.prayer[0].title}</h2>
            <div className="conte-text">{ReactHtmlParser(this.state.prayer[0].body)}</div>
            <img src={Constants.APP_DOMAIN + this.state.prayer[0].field_image} alt="" title="" />
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
        <div className="loading-car">
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
        console.log(result,"result");
        this.setState({
          prayer: result
        });
      }
    )
  }

}

export default Prayers;