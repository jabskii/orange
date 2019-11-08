import React, { Component } from 'react';

import PlayerList from '../player/PlayerList';
import TeamList from '../team/TeamList';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <PlayerList />
        </div>

        <div className="row">
          <div className="col">
            <TeamList />
          </div>
        </div>
      </div>
    );
  }
}
