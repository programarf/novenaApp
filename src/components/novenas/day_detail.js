import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Link } from "react-router-dom";
import Constants from '../../constants/constants.js';
import { Oracion,Tabs } from './novena';

// imagenes
import PortadaHome from "./../../assets/img/oracion-title.png";
class DayDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postId : props.match.params.postId,
    };
  };

  render() {
    if (this.state.post !== undefined){
      return (
        <Oracion>
          <div className = "novena-detail">
            <div className="menu-oracion">
              <Link to={`/novena/home-dia/${this.state.post[0].id}`}>
                Ver oraciones del día
              </Link>
            </div>
            {/* <h2>Consideración</h2> */}
            <div className="img-oraci">
              <img src={PortadaHome} alt="" />
            </div>
            <div className="conte-text">{ReactHtmlParser(this.state.post[0].body) }</div>
          </div>
          <Tabs>
            <Link to={`/`}> previews </Link>
            <Link to={`/`}> Next </Link>
          </Tabs>
        </Oracion>
      );
    }else{
      return (
        <p>Cargando...</p>
      )
    }
  }

  componentDidMount() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    let url = Constants.APP_DOMAIN_POST_DETAIL  + this.state.postId + '/dia';
    fetch(proxyUrl+url)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          post: result
        });
      }
    )
  }
}

export default DayDetail;