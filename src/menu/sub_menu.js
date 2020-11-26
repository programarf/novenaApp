import React from 'react';
import Services from '../util/servicies';
import { BrowserRouter as Route, Link } from "react-router-dom";
import { LiItem } from '../GlobalStyles';

class SubMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      ...props
    };
    this.closeMenu = this.closeMenu.bind(this);
  }

  async componentDidMount() {
    let url = this.state.url;
    let obj = new Services();
    let Items = await obj.MenuMain(url);
    this.setState({
      item: Items.reverse()
    })
  }
  closeMenu() {
    document.querySelector(".tclodes").click();
  }

  render() {
    return (
      <ul >
        {this.state.item.map(item => (
          <LiItem key={item.id} >
            <Link
              to={{
                pathname: `${item.enlace.replace('/api', '')}`,
                state: {
                  IdPost: item.id,
                  day: item.enlace.replace('/api', '')
                }
              }}
              onClick={this.closeMenu}
              id={this.state.id}>
              {item.title}
            </Link>
          </LiItem>
        ))}
      </ul>
    );
  }
}

export default SubMenu;
