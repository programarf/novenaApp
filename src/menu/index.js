import React, { useContext } from 'react';
import { MenuContext } from "react-flexible-sliding-menu";
import { BrowserRouter as Route, Link } from "react-router-dom";
import { LiItem } from '../GlobalStyles';
import { DropDown, Icon } from './style';

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
    this.handleClick = this.handleClick.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  async componentDidMount() {
    let url = Constants.APP_MENU_MAIN;
    let obj = new Services();
    let Items = await obj.MenuMain(url);

    this.setState({
      items: Items
    });
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  closeMenu() {
    document.querySelector(".tclodes").click();
  }

  render() {
    var activeIndex = this.state.activeIndex;
    // const { closeMenu } = useContext(MenuContext);
    if (this.state.type === "1") {
      return (
        <div className='button-menu'>
          <ul>
            {this.state.items.map(item => (
              // <button onClick={toggleMenu} >
                <LiItem key={item.id_mp} >
                  <Link to={`${item.url_base}`}>
                    {item.nombre}
                  </Link>
                </LiItem>
              // </button>
            ))}
          </ul>
        </div>
      );
    } else {
      return (
        <div className='button-menu'>
          <LiItem>
            <div>
              <Link
                to="/"
                onClick={this.closeMenu}>
                Home
              </Link>
            </div>
          </LiItem>
          {this.state.items.map((item, i) => (
            <LiItem key={item.id_mp}
             >
              {(item.id_mp == 4 ?
                <div>
                  <Link to={`${item.url_base}`}>
                    {item.nombre}
                  </Link>
                  <Icon
                    onClick={this.handleClick}>
                      i
                  </Icon>
                  <DropDown className={this.state.isToggleOn ? 'true' : ''}>
                    <SubMenu
                      url={Constants.APP_DOMAIN_POSTS}
                      urlBase="/novena/">
                    </SubMenu>
                  </DropDown>
                </div>
                : ''
              )}
              {(item.id_mp == 7 || item.id_mp == 8 || item.id_mp == 5 || item.id_mp == 6 ?
                <div>
                  <Link
                    to={`${item.url_base}`}
                    className={(item.id_mp == 7)? "btn-download" :"item" }
                    onClick={this.closeMenu}>
                    {item.nombre}
                  </Link>
                </div>
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
