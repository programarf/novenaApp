import React from 'react';
import { Link } from "react-router-dom";
import Constants from '../../constants/constants';
import { MenuOraciones } from './style';

// imagenes
import OraDay from "./../../assets/img/oracion-day.png";
class DayHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prayers: [],
      postId: props.match.params.postId,
      day: this.props.location.state.IdPost,
      prayersSend: [],
      dayUrl: this.props.location.state.day
    };
  };

  render() {
    if (this.state.prayers !== undefined) {
      return (
        <MenuOraciones>
          <div className="grip-oracio">
            <div className="navbar">
              <Link
                className="close"
                to={{
                  pathname: `/novenas/`,
                  state: {
                    day: this.state.day
                  }
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15.795" height="16.618" viewBox="0 0 15.795 16.618">
                  <g transform="translate(1496.152 -2409.058)">
                    <rect width="19.806" height="3.127" rx="1.564" transform="translate(-1493.865 2409.058) rotate(47)" fill="#fff" />
                    <rect width="19.806" height="3.127" rx="1.564" transform="translate(-1480.358 2411.191) rotate(133)" fill="#fff" />
                  </g>
                </svg>
              </Link>
            </div>
            <div className="img-comparte">
              <img src={OraDay} alt="" />
            </div>
            <ul className="menu-oracion">
              {this.state.prayers.map(prayer => (
                <li key={prayer.id}>
                  {(prayer.field_orden == 2) ?
                  <div className="secondary">
                    <Link to={{
                        pathname: `${this.state.dayUrl}/oraciones/consideracion`,
                      state: {
                        IdPost: this.state.post[0].id,
                        day: this.state.day,
                        weight: null,
                        list: this.state.prayers,
                        consideration: this.state.post[0]
                      }
                    }}>
                      Consideración
                    </Link>
                    <Link to={{
                      pathname: `${this.state.dayUrl+prayer.enlace}`,
                      state: {
                        IdPost: this.state.post[0].id,
                        day: this.state.dayUrl,
                        weight: prayer.field_orden,
                        list: this.state.prayers,
                        consideration: this.state.post[0]
                      }
                    }}>
                        {prayer.title}
                    </Link>
                    </div>
                    :
                    <Link
                      to={{
                        pathname: `${this.state.dayUrl+prayer.enlace}`,
                        state: {
                          IdPost: this.state.post[0].id,
                          day: this.state.dayUrl,
                          weight: prayer.field_orden,
                          list: this.state.prayers,
                          consideration: this.state.post[0]
                        }
                      }}>
                      {prayer.title}
                    </Link>}
                </li>
              ))}
            </ul>
            <div className="comparte">
              <p>Compra aquí todos los productos <br />Super Ricas y Todo Rico</p>
              <a href="https://www.superricas.com/recetariosuperricas">Comprar</a>
            </div>
            <div className="arrow"></div>
          </div>
        </MenuOraciones>

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
    let url = Constants.APP_PRAYERS_POSTS;
    let urlb = Constants.APP_DOMAIN_POST_DETAIL + this.state.day + '/dia';
    Promise.all([
      fetch(proxyUrl +url),
      fetch(proxyUrl + urlb)
    ])
    .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
    .then(([data1, data2]) => this.setState({
        prayers: data1,
      post: data2
    }));
  }
}

export default DayHome;
