import React, { useContext } from 'react';
import { MenuContext } from "react-flexible-sliding-menu";
import { BrowserRouter as Route, Link } from "react-router-dom";
import { LiItem } from '../GlobalStyles';
import { DropDown } from './style';

import Constants from '../constants/constants';
import Services from '../util/servicies';
import SubMenu from './sub_menu';



class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      ...props,
      activeIndex: 0
    };
    //this.handleClick = this.handleClick.bind(this);

  }

  async componentDidMount() {
    let url = Constants.APP_MENU_MAIN;
    let obj = new Services();
    let Items = await obj.MenuMain(url);

    this.setState({
      items: Items
    });
  }
  handleClick = (index, e) => {
    this.setState({ activeIndex: index });
  }


  render() {
    var activeIndex = this.state.activeIndex;
    if (this.state.type === "1") {
      return (
        <div className='button-menu'>
          <ul>
            {this.state.items.map(item => (
              <LiItem key={item.id_mp} >
                <Link to={`${item.url_base}`}>
                  {item.nombre}
                </Link>
              </LiItem>
            ))}
          </ul>
        </div>
      );
    } else {
      return (
        <div className='button-menu'>
          <LiItem>
            <div>
              <Link to="/">
                Home
              </Link>
            </div>
          </LiItem>
          {this.state.items.map((item, i) => (
            <LiItem key={item.id_mp}
              onClick={this.handleClick.bind(this, i)}
              className={activeIndex === i}>
              {(item.id_mp == 4 ?
                <div>
                  <Link to="#">
                    {item.nombre}
                  </Link>
                  <DropDown className={activeIndex === i} active={activeIndex === i}>
                    <SubMenu
                      url={Constants.APP_DOMAIN_POSTS}
                      urlBase="/novena/">
                    </SubMenu>
                  </DropDown>
                </div>
                : ''
              )}
              {(item.id_mp == 7 || item.id_mp == 8 || item.id_mp == 5 || item.id_mp == 6 ?
                <Link to={`${item.url_base}`}>
                  {item.nombre}
                </Link>
              : ''
              )}
            </LiItem>
          ))}
        </div>
      );
    }
  }
}

export default Menu;
