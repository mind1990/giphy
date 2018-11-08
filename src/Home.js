import React, { Component } from 'react';
import './Home.css';
import Search from './Search';

class Home extends Component {
  render() {
    return (
      <div className ='Home'>
        <h1>Hello World</h1>
        <Search />
      </div>
    )
  }
}

export default Home;