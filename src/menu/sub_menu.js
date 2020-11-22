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

  }

  async componentDidMount() {
    let url = this.state.url;
    let obj = new Services();
    let Items = await obj.MenuMain(url);
    this.setState({
      item: Items
    })
  }

  render() {
    return (
      <ul >
        {this.state.item.map(item => (
          <LiItem key={item.id}>
            <Link to={`${this.state.urlBase + item.id}`}>
              {item.title}
            </Link>
          </LiItem>
        ))}
      </ul>
    );
  }
}

export default SubMenu;