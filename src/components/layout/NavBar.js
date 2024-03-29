import React, { Component } from 'react';

import logoBrand from '../layout/orange.png';

export default class NavBar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <a
            href=""
            className="navbar-brand"
            col-sm-3
            col-md-2
            mr="0"
            align-items-center
          >
            <img src={logoBrand} alt="" width="42" height="42"></img> Orange
          </a>
        </nav>
      </div>
    );
  }
}
