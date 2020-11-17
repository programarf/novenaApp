import React, { useContext } from 'react';
import { GlobalStyle } from './GlobalStyles';
import Home from './page/home'
import { MenuContext } from "react-flexible-sliding-menu";

/* class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user :{
        uid: null,
        name: null,
        token : null
      }
    };
  }; */

function App() {
  const { toggleMenu } = useContext(MenuContext);
  return (
    <div className="App">
      <button onClick={toggleMenu} className="primary-button">
        Toggle Menu
      </button>
      <GlobalStyle />
      <Home />
    </div>
  )
};
//}

export default App;
