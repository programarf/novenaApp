import React from 'react';
//import ReactHtmlParser from 'react-html-parser';
import { Link } from "react-router-dom";
import Constants from '../../constants/constants';
import ReactHtmlParser from 'react-html-parser';
import AudioPlayer from 'react-custom-audio-player';
import { AudioPlayerStyle } from './styles';
import { Villancicos } from './styles';

import Buy from '../../util/buy.js';

class ChismascarolsDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: props.match.params.postId,
    };
  };

  render() {
    //let userId = this.state.user.uid;
    if (this.state.post !== undefined) {
      return (
        <Villancicos>
          <div className="novena-detail">
            <div className="menu-oracion">
              <Link to={`/villancicos/`}>
                Ver villancicos
              </Link>
            </div>
            {this.state.post[0].title}
            {this.state.post[0].field_cancion}
            <div className="conte-text ">
              {ReactHtmlParser(this.state.post[0].body)}
            </div>
            <AudioPlayerStyle>
              <AudioPlayer src={Constants.APP_URL_AUDIOS + this.state.post[0].field_cancion} showRunningTimer />
              <div className="flex-row">
                <div className="prev"></div>
                <div className="next"></div>
              </div>
            </AudioPlayerStyle>
          </div>
        </Villancicos>
      );
    } else {
      return (
        <p>Cargando...</p>
      )
    }
  }

  componentDidMount() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    let url = Constants.APP_CHRISTMAS_CAROLS_DETAILS + this.state.postId;
    fetch(proxyUrl+url)
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

export default ChismascarolsDetails;