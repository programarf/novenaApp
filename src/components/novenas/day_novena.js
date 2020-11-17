import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Link } from "react-router-dom";
import Constants from '../../constants/constants';
import Buy from '../../util/buy.js';

class DayNovena extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postId : props.match.params.postId,
    };
  };

  render() {
    //let userId = this.state.user.uid;
    if (this.state.post !== undefined){
      return (
        <div className = "novena-detail">
          <h2>{this.state.post[0].title}</h2>
          <img src={Constants.APP_DOMAIN + ReactHtmlParser(this.state.post[0].field_imagen_portada) }></img>
          <div>
            <Buy url={this.state.post[0].field_link_compra}></Buy>
          </div>
          <div>
              <Link to={`/novena/dia/${this.state.post[0].id}`}>
                <button>comenzar</button>
              </Link>
          </div>
        </div>
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

export default DayNovena;