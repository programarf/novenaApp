import React from 'react';
import { Link } from "react-router-dom";
import Constants from '../../constants/constants';
import { MenuOraciones } from './novena';

// imagenes
import OraDay from "./../../assets/img/oracion-day.png";
class DayHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prayers: [],
      postId : props.match.params.postId,
      prayersSend: []
    };
  };

  render(){
    if (this.state.prayers !== undefined){
      return(
        <MenuOraciones>
          <div className="grip-oracio">
            <div className="navbar">
              <Link to={`/novena/dia/${this.state.postId}`} className="close">
                <svg xmlns="http://www.w3.org/2000/svg" width="15.795" height="16.618" viewBox="0 0 15.795 16.618">
                  <g transform="translate(1496.152 -2409.058)">
                    <rect width="19.806" height="3.127" rx="1.564" transform="translate(-1493.865 2409.058) rotate(47)" fill="#fff"/>
                    <rect width="19.806" height="3.127" rx="1.564" transform="translate(-1480.358 2411.191) rotate(133)" fill="#fff"/>
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
                  {(prayer.field_orden === 2)?
                    <Link to={{
                        pathname: `/novena/dia/${this.state.postId}`,
                        state: { prayersSend: this.state.prayers
                      }}
                    }>
                      Consideración
                    </Link>
                  :
                    <Link to={`/oracion/${prayer.field_orden}`}>
                      {prayer.title}
                    </Link>}
                </li>
              ))}
            </ul>
            <div className="comparte">
              <p>Compra aquí todos los productos <br/>Super Ricas y Todo Rico</p>
              <a href="https://www.superricas.com/recetariosuperricas">Comprar</a>
            </div>
            <div className="arrow"></div>
          </div>
        </MenuOraciones>

      );
    }else{
      return (
        <p>Cargando...</p>
      )
    }
  }

  componentDidMount() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    let url = Constants.APP_PRAYERS_POSTS;
    fetch(proxyUrl+url)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          prayers: result
        });
      }
    )
  }
}

export default DayHome;