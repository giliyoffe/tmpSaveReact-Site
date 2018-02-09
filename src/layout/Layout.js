import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Content from '.././content/Content.js';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default Layout;
