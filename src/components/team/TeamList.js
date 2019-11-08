import React, { Component } from 'react';
import axios from 'axios';

import TeamCard from './TeamCard';

export default class TeamList extends Component {
  state = {
    url: 'https://www.balldontlie.io/api/v1/teams/?per_page=30',
    teams: ''
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ teams: res.data['data'] });
  }

  render() {
    return (
      <div>
        <React.Fragment>
          {this.state.teams ? (
            <div class="row">
              {this.state.teams.map(teams => (
                <TeamCard
                  key={teams.id}
                  id={teams.id}
                  full_name={teams.full_name}
                  name={teams.name}
                  conference={teams.conference}
                />
              ))}
            </div>
          ) : (
            <h1>Loading NBA Teams</h1>
          )}
        </React.Fragment>
      </div>
    );
  }
}
