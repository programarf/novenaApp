import React from 'react';
//import ReactHtmlParser from 'react-html-parser';
import { Link } from "react-router-dom";
import Constants from '../../constants/constants';
import Buy from '../../util/buy.js';
import { PortadaDay, Tabs } from './style';

// imagenes
import PortadaHome from "./../../assets/img/portada-logo.png";
class DayNovena extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.match.params.name,
      postId: this.props.location.state.IdPost,
      day: this.props.location.state.day,
    };
  };

  render() {
    //let userId = this.state.user.uid;
    if (this.state.post !== undefined) {
      console.log(this.state.post);
      return (
        <PortadaDay>
          <div className="portada-day">
            <img src={PortadaHome} alt="" />
            <h2>{this.state.post[0].title}</h2>
            <img src={Constants.APP_DOMAIN + this.state.post[0].field_imagen_portada}></img>
            <div>
              <Buy url={this.state.post[0].field_link_compra}></Buy>
            </div>
          </div>
          <Tabs>
            {console.log(this.state.list[0].enlace)}
            <Link
              to={{
                pathname: `${this.state.day+this.state.list[0].enlace}`,
                state: {
                  IdPost: this.state.post[0].id,
                  day: this.state.day,
                  weight: 1,
                  list:this.state.list,
                  consideration: this.state.post[0]
                }
              }}>
              Comenzar
              </Link>
          </Tabs>
        </PortadaDay>
      );
    } else {
      return (
        <div className="loading">
          <p>Cargando...</p>
        </div>
      )
    }
  }

  componentDidMount() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    let url = Constants.APP_DOMAIN_POST_DETAIL + this.state.postId + '/dia';
    fetch(proxyUrl + url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            post: result
          });
        }
      )

    url = Constants.APP_PRAYERS_POSTS;
    fetch(proxyUrl + url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            list: result
          });
        }
      )
  }
}

export default DayNovena;
