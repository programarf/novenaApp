import React from 'react';
//import ReactHtmlParser from 'react-html-parser';
import { Link } from "react-router-dom";
import Constants from '../../constants/constants';
import ReactHtmlParser from 'react-html-parser';
import ReactPlayer from 'react-player';
// import Buy from '../../util/buy.js';
import { DetailsRecipes, Modal } from './styles';

// imagenes
import IngredientesTitle from "./../../assets/img/ingredientes-title3.png";

class RecipesDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: this.props.location.state.IdPost,
    };
  };

  render() {
    if (this.state.post !== undefined) {
      console.log(this.state.post);
      return (
        <DetailsRecipes>
          <div className="detail-recipes">
            <div className="menu-lateral">
              <Link to={`/recetas/`}> Ver recetas </Link>
            </div>
            <div className="overflow">
              <div className="img-title">
                <img src={Constants.APP_DOMAIN + this.state.post[0].field_image_title} alt="" title=""/>
              </div>
              <div className="video">
                <Modal>
                  <ReactPlayer
                    url={this.state.post[0].field_link_video}
                    width="300"
                  />
                </Modal>
              </div>
              <div className="img-ingredien">
                <img src={IngredientesTitle} alt="" title=""/>
              </div>
              <div className="content-body">
                {ReactHtmlParser(this.state.post[0].body)}
              </div>
            </div>
          </div>
        </DetailsRecipes>
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
