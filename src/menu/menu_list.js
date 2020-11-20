import React from 'react';
//import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Services from '../util/servicies'
import { ListMenu } from './style';
import { LiItem } from '../GlobalStyles';

class MenuList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };

  }
  componentDidMount() {
    let obj = new Services();
    let Items = obj.MenuMain();
    console.log("Items", Items);

    this.setState({
      items: Items
    });
    console.log("this.state", this.state);
  }
  render() {
    return (
      <div className='button-menu'>
        <ul>
           {this.state.items.map(Item => (
          <li key={Item.id_mp}>
            {/* <Link to={`${Item.url_base }``${Item.id_mp}`}> */}
            <Link to={`${Item.url_base }`}>
              sss<button>{Item.nombre}</button>
            </Link>
          </li>
        ))}
          <LiItem>
            <Link to="/novena/">Novenas</Link>
          </LiItem>
          <LiItem>
            <Link to="/villancicos/">Villancicos</Link>
          </LiItem>
          <LiItem >
            <Link to="/recipes/">Resetas</Link>
          </LiItem>
        </ul>
      </div>
    );
  }
}



export default MenuList;