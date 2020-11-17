import React from 'react';
import {
  Link
} from "react-router-dom";
import Constants from '../../constants/constants';


class Christmascarols extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      userId: props.userId
    };
  };

  render() {
    return (
      <div className="all-christmas-novena">
        <Link to={`/`}>
          X
        </Link>
        <h2><span>Villa</span>Villa<span>Villa</span></h2>
        <div className="list-novena">
          <ul>
            {this.state.posts.map(post => (
              <li key={post.id}>
                <Link to={`/novena/${post.id}`}>
                  <button>{post.title}</button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  componentDidMount() {
    let url = Constants.APP_CHRISTMAS_CAROLS_POSTS;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          posts: data.reverse()
        });
      })
  }

}

export default Christmascarols;