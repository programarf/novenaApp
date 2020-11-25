import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Link } from "react-router-dom";
import Constants from '../../constants/constants.js';
import { Oracion, Tabs } from './style';

// imagenes
import PortadaHome from "./../../assets/img/oracion-title.png";
class DayDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: this.props.location.state.IdPost,
      weight: this.props.location.state.weight,
      day: this.props.location.state.day
    };
  };

  render() {
    if (this.state.post !== undefined) {
      { console.log("this details·", this.state) }
      return (
        <Oracion>
          <div className="novena-detail">
            <div className="menu-oracion">
              {console.log(this.state.post[0])}
              <Link
                to={{
                  pathname: `/novena/oraciones/${this.state.post[0].title}`,
                  state: {
                    IdPost: this.state.postId
                  }
                }}>
                Ver oraciones del día
              </Link>
            </div>
            {/* <h2>Consideración</h2> */}
            <div className="img-oraci">
              <img src={PortadaHome} alt="" />
            </div>
            <div className="conte-text">{ReactHtmlParser(this.state.post[0].body)}</div>
          </div>
          <Tabs>
            <Link to={`/`}
              className={(this.state.weight == 1 ? 'hidden' : '')}
            > previews </Link>
            <Link
              to={`/`}> Next </Link>
          </Tabs>
        </Oracion>
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
    let weight = this.state.weight;
    let day = this.state.weight;
    let postId = this.state.postId;
    let url
    (weight != null) ? url = Constants.APP_PRAYER_POSTS + weight :
      url = Constants.APP_PRAYER_POSTS + postId;

    // let url = Constants.APP_DOMAIN_POST_DETAIL + this.state.postId + '/dia';
    fetch(proxyUrl + url)
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