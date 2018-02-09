import React, { Component } from 'react';
import News from '.././pages/News.js';


class Header extends React.Component {
  render() {
    return (
      <div className="App-header">
        <h1> Website Title </h1>

        <div className="topnav">
            <a className="active" href="#home">Home</a>
            <a href={News}>News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
      </div>
    );
  }
}

export default Header;
