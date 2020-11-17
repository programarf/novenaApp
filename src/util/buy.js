import React from 'react';

class Buy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props
    };
  };

  render(){
    return (
      <a className = "btn-buy"  href={this.state.url}>
        comprar
      </a>
    );
  }
}

export default Buy;