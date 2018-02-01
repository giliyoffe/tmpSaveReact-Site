import React, { Component } from 'react';
import Header from './Header.js';
import Content from '.././content/Content.js';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
          <Content />

      </div>
    );
  }
}

export default Layout;
