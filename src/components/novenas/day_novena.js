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
            <div className="title-day">
              <img src={PortadaHome} alt="novena de aguinaldos" title="novena de aguinaldos" />
            </div>
            <h2>{this.state.post[0].title}</h2>
            <div className="papas" style={{backgroundImage: `url(${Constants.APP_DOMAIN + this.state.post[0].field_imagen_portada})`}}></div>
            <div>
              <Buy url={this.state.post[0].field_link_compra}></Buy>
            </div>
          </div>
          <Tabs>
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
        <div className="loading-car">
          <p>Cargando...</p>
        </div>
      )
    }
  }

  componentDidMount() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    let url = Constants.APP_DOMAIN_POST_DETAIL + this.state.postId + '/dia';
    let urlb = Constants.APP_PRAYERS_POSTS;
    // fetch(proxyUrl + url)
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       this.setState({
    //         post: result
    //       });
    //     }
    //   )
    // url = Constants.APP_PRAYERS_POSTS;
    // fetch(proxyUrl + url)
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       this.setState({
    //         list: result
    //       });
    //     }
    //   )
    Promise.all([
      fetch(proxyUrl +url),
      fetch(proxyUrl + urlb)
    ])
    .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
    .then(([data1, data2]) => this.setState({
      post: data1,
      list: data2
    }));
  }
}

export default DayNovena;
