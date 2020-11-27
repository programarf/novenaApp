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
      day: this.props.location.state.day,
      consideration: this.props.location.state.consideration,
      list: this.props.location.state.list,
      isFlushed: false
    };
  };
  render() {
    let render;
    let next;
    let next_title;
    let prev;
    let prev_title;
    { console.log(this.state.weight) }

    if (this.state.weight !== null) {
      render = this.state.list[parseInt(this.state.weight) - 1];
      next = (parseInt(this.state.weight) <= 1) ? null : parseInt(this.state.weight) + 1;
      next_title = (next == null) ? this.state.consideration : this.state.list[next - 1];
      prev = (parseInt(this.state.weight) == null) ? 1 : ((parseInt(this.state.weight) == 2) ? null : parseInt(this.state.weight) - 1);
      prev_title = (next == null) ? this.state.list[parseInt(this.state.weight) - 1] : ((next == 2) ? this.state.consideration : this.state.list[parseInt(this.state.weight) - 2]);
    } else {
      render = this.state.consideration;
      prev = 1;
      next = 2;
      next_title = this.state.list[next - 1];
      prev_title = this.state.list[0];
    }
    return (
      <Oracion>
        <div className="before-cus"></div>
        <div className="day-detail">
          <div className="menu-oracion">
            {console.log(next)}
            {console.log(prev)}
            {console.log("this.state.day", this.state.day)}
            <Link
              to={{
                pathname: `${this.state.day}/oraciones`,
                state: {
                  IdPost: this.state.postId,
                  day: this.state.day,
                  weight: next,
                  list: this.state.list,
                  consideration: this.state.consideration,
                }
              }}>
              Ver oraciones del día
            </Link>
          </div>
          {/* <h2>Consideración</h2> */}
          <div className="conte-text">
            <div className="img-oraci">
              {console.log(render.field_image, 'hello tio..')}
              <img src={render.field_image_title} alt="" />
            </div>
            {ReactHtmlParser(render.body)}
          </div>
          <div className="gradient"></div>
        </div>
        <Tabs>
          <Link to={{
            pathname: `${(next == 3) ? this.state.day + "/oraciones/consideracion" : this.state.day + prev_title.enlace.replace('/api', '')}`,
            state: {
              IdPost: this.state.postId,
              day: this.state.day,
              weight: prev,
              list: this.state.list,
              consideration: this.state.consideration,
            },
          }}
            className={(this.state.weight == 1 ? 'hidden' : '')}
          >
            {(next == 3) ? "Consideración" : prev_title.title}
          </Link>
          <Link
            to={{
              pathname: `${(next == null) ? this.state.day + "/oraciones/consideracion" : ((next <= this.state.list.length) ? this.state.day + next_title.enlace.replace('/api', '') : "#")}`,
              state: {
                IdPost: this.state.postId,
                day: this.state.day,
                weight: next,
                list: this.state.list,
                consideration: this.state.consideration
              },
            }}
            className={(next > this.state.list.length ? '' : '')}
          >
            {(next == null) ? "Consideración" : ((next <= this.state.list.length) ? next_title.title : "")}
          </Link>
        </Tabs>
        <div className="img-secons">
          {(render.field_image) ? <img src={'https://test-navidadsr.tbwacolombia.com' + render.field_image} alt="" /> : ' '}
        </div>
      </Oracion>
    );

  }

  componentDidUpdate(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      window.location.reload();
    }
  }

  //   var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  //   let weight = this.state.weight;
  //   let day = this.state.weight;
  //   let postId = this.state.postId;
  //   let url
  //   (weight != null) ? url = Constants.APP_PRAYER_POSTS + weight :
  //     url = Constants.APP_PRAYER_POSTS + postId;

  //   // let url = Constants.APP_DOMAIN_POST_DETAIL + this.state.postId + '/dia';
  //   fetch(proxyUrl + url)
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           post: result
  //         });
  //       }
  //     )
  // }
}

export default DayDetail;
