import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Link } from "react-router-dom";
import Constants from '../../constants/constants.js';
import { Oracion } from './novena';

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
            <Link to={`/novena/home-dia/${this.state.post[0].id}`}>
              Ver oraciones del día
            </Link>
            <h2>Consideración</h2>
            <div>{ReactHtmlParser(this.state.post[0].body) }</div>
          </div>
          <div>menu bottom</div>
        </Oracion>
      );
    }else{
      return (
        <p>Cargando...</p>
      )
    }
  }

  componentDidMount() {
    let url = Constants.APP_DOMAIN_POST_DETAIL  + this.state.postId + '/dia';
    fetch(url)
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