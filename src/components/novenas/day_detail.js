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
    if (this.state.weight !== null) {
      render = this.state.list[this.state.weight-1];
      next = (this.state.weight <= 1) ? null:this.state.weight+1;
      next_title = (next == null) ? this.state.consideration : this.state.list[next-1];
      prev = (this.state.weight == null) ? 1 : ((this.state.weight == 2) ? null : this.state.weight - 1);
      prev_title = (next == null) ? this.state.list[this.state.weight-1] : ((next == 2) ? this.state.consideration : this.state.list[this.state.weight-2]);
    } else {
      render = this.state.consideration;
      prev = 1;
      next = 2;
      next_title = this.state.list[next-1];
      prev_title = this.state.list[0];
    }
    { console.log("list",this.state.list)}
    { console.log("current", this.state.weight) }
    { console.log("current_data", render) }
    { console.log("prev", prev) }
    { console.log("prev_data", prev_title)}
    {console.log("next",next)}
    { console.log("nex_data", next_title) }

      return (
        <Oracion>
          <div className="novena-detail">
            <div className="menu-oracion">
              <Link
                to={{
                  pathname: `/novena/oraciones/${render}`,
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
            <div className="conte-text">{ReactHtmlParser(render.body)}</div>
          </div>
          <Tabs>
            <Link to={{
                pathname: `${(next == 3) ? this.state.day + "/consideracion" : this.state.day + prev_title.enlace}`,
                state: {
                  IdPost: this.state.postId,
                  day: this.state.day,
                  weight: prev,
                  list:this.state.list,
                  consideration: this.state.consideration,
                },
              }}
              className={(this.state.weight == 1 ? 'hidden' : '')}
            >
              {(next == 3) ? "Consideración" : prev_title.title}
            </Link>
            {console.log("state",this.state.list.length)}
            <Link
              to={{
                pathname: `${(next == null) ? this.state.day + "/consideracion" : ((next <= this.state.list.length) ? this.state.day + next_title.enlace : "#")}`,
                state: {
                  IdPost: this.state.postId,
                  day: this.state.day,
                  weight: next,
                  list:this.state.list,
                  consideration: this.state.consideration
                },
              }}
              className={(next > this.state.list.length ? 'hidden' : '')}
              >
              {(next == null) ? "Consideración" : ((next <= this.state.list.length) ? next_title.title : "#")}
            </Link>
          </Tabs>
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
