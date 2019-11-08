import React, { Component } from 'react';
import axios from 'axios';

import PlayerCard from './PlayerCard';
import Search from '../layout/Search';

export default class PlayerList extends Component {
  state = {
    url: 'https://www.balldontlie.io/api/v1/players/?per_page=8',
    players: []
  };

  getPlayer = async e => {
    const playerName = e.target.elements.playerName.value;
    e.preventDefault();
    const url = await fetch(
      `https://www.balldontlie.io/api/v1/players/?search=${playerName}`
    );
    const data = await url.json();
    this.setState({ players: data.data });
    console.log(this.state.players);
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ players: res.data['data'] });
  }

  render() {
    return (
      <React.Fragment>
        <Search getPlayer={this.getPlayer} />
        {this.state.players ? (
          <div className="row">
            {this.state.players.map(players => (
              <PlayerCard
                key={players.id}
                id={players.id}
                first_name={players.first_name}
                last_name={players.last_name}
                full_name={players.team.full_name}
                url={players.url}
              />
            ))}
            {this.state.players.map(player => {
              return <p key={player.id}>{player.first_name}</p>;
            })}
          </div>
        ) : (
          <h1>Loading NBA Players</h1>
        )}
      </React.Fragment>
    );
  }
}
