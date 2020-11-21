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

  static otrafuncion =  async () => {
    //console.log(await nombre('zac3599'))
    let obj = new Services();
    let Items = await obj.MenuMain();
    console.log("Items", Items);
    this.setState({
      items: Items
    });
  }

  async componentDidMount () {
    let obj = new Services();
    let Items = await obj.MenuMain();
    console.log("Items", Items);
    this.setState({
      items: Items
    });


  }
  render() {
    console.log(this.state.items);
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
  }

}

export default MenuList;