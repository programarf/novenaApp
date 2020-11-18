import React from 'react';
//import ReactHtmlParser from 'react-html-parser';
import { Link } from "react-router-dom";
import Constants from '../../constants/constants';
import ReactHtmlParser from 'react-html-parser';
import ReactPlayer from 'react-player';
import Buy from '../../util/buy.js';

class RecipesDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: props.match.params.postId,
    };
  };

  render() {
    //let userId = this.state.user.uid;
    if (this.state.post !== undefined) {
      console.log(this.state.post);
      return (
        <div className="novena-detail">
          <Link to={`/recipes/`}>
            Ver resetas
          </Link>
          {this.state.post[0].title}
          {this.state.post[0].field_cancion}
          <div>{ReactHtmlParser(this.state.post[0].body)}</div>
          <div>
            <ReactPlayer
              url={this.state.post[0].field_link_video}
              width="300"
            />
          </div>
        </div>
      );
    } else {
      return (
        <p>Cargando...</p>
      )
    }
  }

  componentDidMount() {
    let url = Constants.APP_CHRISTMAS_RECIPES_DETAILS + this.state.postId;
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

export default RecipesDetails;