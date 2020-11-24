import React from 'react';
//import ReactHtmlParser from 'react-html-parser';
import { Link } from "react-router-dom";
import Constants from '../../constants/constants';
import ReactHtmlParser from 'react-html-parser';
import ReactPlayer from 'react-player';
import Buy from '../../util/buy.js';
import { HomeRecipes, Modal } from './styles';

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
      console.log("ddddd", this.state.post);

      return (
        <HomeRecipes>
          <div className="novena-detail">
          <Link
            to={`/recetas/`}>
            Ver resetas
          </Link>
git           {this.state.post[0].title}
          {this.state.post[0].field_cancion}
          <div>{ReactHtmlParser(this.state.post[0].body)}</div>
          <Modal>
            <ReactPlayer
              url={this.state.post[0].field_link_video}
              width="300"
            />
          </Modal>
        </div>
        </HomeRecipes>
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
    let url = Constants.APP_CHRISTMAS_RECIPES_DETAILS + this.state.postId;
    console.log(url);
    fetch(proxyUrl+url)
      .then(res => res.json())
      .then(
        (result) => {
          console.log("result", result);
          this.setState({
            post: result
          });
        }
      )

  }
}

export default RecipesDetails;