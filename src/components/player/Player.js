import React, { Component } from 'react';
import axios from 'axios';
import { numberLiteralTypeAnnotation } from '@babel/types';

export default class Player extends Component {
  state = {
    first_name: '',
    last_name: '',
    imageUrl: '',
    height_feet: '',
    height_inches: '',
    position: '',
    weight_pounds: '',
    abbreviation: '',
    city: '',
    conference: '',
    division: '',
    full_name: '',
    name: ''
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    // URLs for NBA Player information
    const playerUrl = `https://www.balldontlie.io/api/v1/players/${id}/`;

    // Get NBA Player information
    const playerRes = await axios.get(playerUrl);
    const first_name = playerRes.data.first_name;
    const last_name = playerRes.data.last_name;
    const imageUrl = `https://nba-players.herokuapp.com/players/${last_name}/${first_name}`;
    const height_feet = Math.abs(playerRes.data.height_feet);
    const height_inches = Math.abs(playerRes.data.height_inches);
    const position = playerRes.data.position;
    const weight_pounds = Math.abs(playerRes.data.weight_pounds);

    const abbreviation = playerRes.data.team.abbreviation;
    const city = playerRes.data.team.city;
    const conference = playerRes.data.team.conference;
    const division = playerRes.data.team.division;
    const full_name = playerRes.data.team.full_name;
    const name = playerRes.data.team.name;

    this.setState({
      first_name,
      last_name,
      imageUrl,
      height_feet,
      height_inches,
      position,
      weight_pounds,
      abbreviation,
      city,
      conference,
      division,
      full_name,
      name
    });
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.first_name} {this.state.last_name}
        </h1>
      </div>
    );
  }
}
