import React, { Component } from 'react';
import axios from 'axios';

import PlayerCard from './PlayerCard';

export default class PlayerList extends Component {
  state = {
    url: 'https://www.balldontlie.io/api/v1/players/?per_page=10',
    players: null
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ players: res.data['data'] });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.players ? (
          <div className="row">
            {this.state.players.map(players => (
              <PlayerCard
                key={players.id}
                id={players.id}
                first_name={players.first_name}
                last_name={players.last_name}
                url={players.url}
              />
            ))}
          </div>
        ) : (
          <h1>Loading NBA Players</h1>
        )}
      </React.Fragment>
    );
  }
}
