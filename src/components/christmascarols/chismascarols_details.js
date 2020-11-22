import React from 'react';
//import ReactHtmlParser from 'react-html-parser';
import { Link } from "react-router-dom";
import Constants from '../../constants/constants';
import ReactHtmlParser from 'react-html-parser';
import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from 'react-custom-audio-player';

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
        <div className="novena-detail">
          <Link to={`/villancicos/`}>
            Ver villancicos
          </Link>
          {this.state.post[0].title}
          {this.state.post[0].field_cancion}
          <div>{ReactHtmlParser(this.state.post[0].body)}</div>
          <AudioPlayer
            src={Constants.APP_URL_AUDIOS + this.state.post[0].field_cancion}
            showRunningTimer
          />
        </div>
      );
    } else {
      return (
        <p>Cargando...</p>
      )
    }
  }

  componentDidMount() {
    let url = Constants.APP_CHRISTMAS_CAROLS_DETAILS + this.state.postId;
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

export default ChismascarolsDetails;