import React from 'react';
import Constants from '../constants/constants';
import Services from '../util/servicies';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LiItem } from '../GlobalStyles';

class MenuDay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  async componentDidMount() {
    let url = Constants.APP_DOMAIN_POSTS;
    let obj = new Services();
    let Items = await obj.MenuMain(url);
    console.log("Items", Items);
    this.setState({
      items: Items
    });
  }

  render() {
    return (
      <div className='button-menu'>
        <div className='button-menu'>
          <ul>
            {this.state.items.map(item => (
              <LiItem key={item.id}>
                <Link to={`${item.id}`}>
                  {item.title}
                </Link>
              </LiItem>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default MenuDay;