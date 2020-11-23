import React from 'react';
import { Link } from "react-router-dom";
import Constants from '../../constants/constants';
import { StyleNovena } from './novena';

// imagenes
import diasHome from "./../../assets/img/dias-home.png";
class ChristmasNovena extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      //userId: props.userId
    };
  };

  render(){
    return (
      <StyleNovena>
      <div className = "day-home-wrap">
        <div className='flex'>
          <Link to={`/`} className="close"> X </Link>
        </div>
        <img src={diasHome} alt="" />
        {/* <h2><span>comparte en familia</span>las novenas<span>navideñas</span></h2> */}
        <div className = "list-novena">
          <ul>
            {this.state.posts.map(post => (
              <li key={post.id}>
                <Link to={`/novena/${post.id}`}> {post.title} </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </StyleNovena>
    );
  }
  componentDidMount() {
    let url = Constants.APP_DOMAIN_POSTS;
    fetch(url)
    .then(res => res.json())
    .then(data => {
      this.setState({
        posts: data.reverse()
      });
    })
  }

}

export default ChristmasNovena;