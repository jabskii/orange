import React, { Component } from 'react';

import PlayerList from '../player/PlayerList';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <PlayerList />
        </div>
      </div>
    );
  }
}
