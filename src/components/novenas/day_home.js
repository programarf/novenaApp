import React from 'react';
import { Link } from "react-router-dom";
import Constants from '../../constants/constants';


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
        <ul>
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
      );
    }else{
      return (
        <p>Cargando...</p>
      )
    }
  }

  componentDidMount() {
    let url = Constants.APP_PRAYERS_POSTS;
    fetch(url)
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