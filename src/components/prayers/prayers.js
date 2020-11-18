import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import {
  Link
} from "react-router-dom";
import Constants from '../../constants/constants';


class Prayers extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      postId : props.match.params.postId,
    };
  };

  render(){
    if (this.state.prayer !== undefined){
        console.log(this.state)

      return (
        <div className = "novena-detail">
         {/*  <Link to={`/novena/home-dia/${this.state.prayer[0].id}`}>
            <button>Ver oraciones del día</button>
          </Link> */}
          <h2>{this.state.prayer[0].title}</h2>
          <div>{ReactHtmlParser(this.state.prayer[0].body) }</div>
          <img src={Constants.APP_DOMAIN + this.state.prayer[0].field_image}></img>
          <div className="control">
            <Link to={`/oracion/${this.state.prayer[0].field_orden}`}>
              previews
            </Link>
            <Link to={`/oracion/${this.state.prayer[0].field_orden}`}>
              Next
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
    console.log("prop", this.state );
    let url = Constants.APP_PRAYER_POSTS + this.state.postId;
    fetch(url)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          prayer: result
        });
      }
    )
  }

}

export default Prayers;