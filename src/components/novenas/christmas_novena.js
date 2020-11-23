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
          <Link to={`/`} className="close">
            <svg xmlns="http://www.w3.org/2000/svg" width="15.795" height="16.618" viewBox="0 0 15.795 16.618">
              <g transform="translate(1496.152 -2409.058)">
                <rect width="19.806" height="3.127" rx="1.564" transform="translate(-1493.865 2409.058) rotate(47)" fill="#fff"/>
                <rect width="19.806" height="3.127" rx="1.564" transform="translate(-1480.358 2411.191) rotate(133)" fill="#fff"/>
              </g>
            </svg>
          </Link>
        </div>
        <div className="img-comparte">
          <img src={diasHome} alt="" />
        </div>
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
        <div className="comparte">
          <p>Compra aquí todos los productos <br/>Super Ricas y Todo Rico</p>
          <a href="https://www.superricas.com/recetariosuperricas">Comprar</a>
        </div>
        <div className="arrow"></div>
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