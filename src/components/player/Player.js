import React, { Component } from 'react';
import axios from 'axios';

const TEAM_COLORS = {
  Hawks: 'f03a42',
  Celtics: '00834b',
  Nets: '2e2925',
  Hornets: '1e0e5e',
  Bulls: '1e0e5e',
  Cavaliers: '710031',
  Mavericks: '0063ae',
  Nuggets: '06223f',
  Pistons: 'd71333',
  Warriors: 'ffba40',
  Rockets: 'dd1444',
  Pacers: '021e3e',
  Clippers: 'd71333',
  Lakers: 'ffc546',
  Grizzlies: '5875a7',
  Heat: '952333',
  Bucks: '00471d',
  Timberwolves: 'c2cdd3',
  Pelicans: 'b9975e',
  Knicks: 'ff6836',
  Thunder: 'ffb53e',
  Magic: '130c0d',
  Sixers: 'fd1a4e',
  Suns: 'ffa136',
  Blazers: 'f03b43',
  Kings: '602b7e',
  Spurs: 'c2cdd3',
  Raptors: 'dd1444',
  Jazz: '1f5136',
  Wizards: '002959'
};

export default class Player extends Component {
  state = {
    playerIndex: null,
    first_name: '',
    last_name: '',
    imageUrl: '',
    height_feet: null,
    height_inches: null,
    position: '',
    weight_pounds: null,
    abbreviation: '',
    city: '',
    conference: '',
    division: '',
    full_name: '',
    team_name: ''
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    // URLs for NBA Player information
    const playerUrl = `https://www.balldontlie.io/api/v1/players/${id}/`;
    // const avgUrl = `https://www.balldontlie.io/api/v1/season_averages/?player_ids[]=${id}`;

    // Get NBA Player information
    const playerRes = await axios.get(playerUrl);
    // const averageRes = await axios.get(avgUrl);

    const playerIndex = playerRes.data.id;
    const first_name = playerRes.data.first_name;
    const last_name = playerRes.data.last_name;
    const imageUrl = `https://nba-players.herokuapp.com/players/${last_name}/${first_name}`;
    const height_feet = playerRes.data.height_feet;
    const height_inches = playerRes.data.height_inches;
    const position = playerRes.data.position;
    const weight_pounds = playerRes.data.weight_pounds;

    const abbreviation = playerRes.data.team.abbreviation;
    const city = playerRes.data.team.city;
    const conference = playerRes.data.team.conference;
    const division = playerRes.data.team.division;
    const full_name = playerRes.data.team.full_name;
    const team_name = playerRes.data.team.name;

    this.setState({
      playerIndex,
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
      team_name
    });
  }

  render() {
    return (
      <div className="col">
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-5">
                <h5>
                  {this.state.playerIndex} - {this.state.first_name}{' '}
                  {this.state.last_name}
                </h5>
              </div>
              <div className="col-7">
                <div className="float-right">
                  <h5
                    key={this.state.team_name}
                    className="badge badge-primary badge-pill mr-1"
                    style={{
                      backgroundColor: `#${TEAM_COLORS[this.state.team_name]}`,
                      color: 'white'
                    }}
                  >
                    {this.state.team_name}
                  </h5>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-md-3">
                  <img
                    src={this.state.imageUrl}
                    className="card-img-top rounded mx-auto mt-2"
                  ></img>
                </div>
                <div className="col-md-9">
                  <h6>
                    Height: {this.state.height_feet}'{this.state.height_inches}
                  </h6>
                  <h6>Weight: {this.state.weight_pounds}lbs</h6>
                  <h6>Position: {this.state.position}</h6>
                  <br />
                  <h6>Team Status:</h6>
                  <h6>Team - {this.state.full_name}</h6>
                  <h6>City - {this.state.city}</h6>
                  <h6>Conference - {this.state.conference}</h6>
                  <h6>Division - {this.state.division}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
