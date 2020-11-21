import React from 'react';
import { ListMenu } from './style';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LiItem } from '../GlobalStyles';
import Constants from '../constants/constants';
import Services from '../util/servicies';
import MenuDay from './menu_day';


class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      ...props
    };
  }

  async componentDidMount() {
    let url = Constants.APP_MENU_MAIN;
    let obj = new Services();
    let Items = await obj.MenuMain(url);
    console.log("Items",Items);
    this.setState({
      items: Items
    });
  }

  render() {
    console.log(this.state);
    if(this.state.type === "1"){
      return (
        <div className='button-menu'>
          <ul>
            {this.state.items.map(item => (
              <LiItem key={item.id_mp}>
                <Link to={`${item.url_base}`}>
                  {item.nombre}
                </Link>
              </LiItem>
            ))}
          </ul>
        </div>
      );
    }else{
      return (
        <div className='button-menu'>
          {this.state.items.map(item => (
            <LiItem key={item.id_mp}>
              <Link to={`${item.url_base}`}>
                {item.nombre}
              </Link>
              {(item.id_mp == 4 ?
                (<MenuDay></MenuDay>)
                : ''
              )}
            </LiItem>
          ))}
        </div>
      );
    }
  }
/*   render() {
    return (
      <div className='button-menu'>
        <ul>
          {this.state.items.map(item => (
            <LiItem key={item.id_mp}>
              <Link to={`${item.url_base}`}>
                {item.nombre}
              </Link>
            </LiItem>
          ))}
        </ul>
      </div>
    );
  } */
}

export default Menu;