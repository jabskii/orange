import React, { Component } from 'react';
import axios from 'axios';

export class Team extends Component {
  state = {
    teamIndex: null,
    abbreviation: '',
    city: '',
    conference: '',
    division: '',
    full_name: '',
    name: ''
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    // URLs for NBA Team information
    const teamUrl = `https://www.balldontlie.io/api/v1/teams/${id}/`;

    // Get NBA Player information
    const teamRes = await axios.get(teamUrl);

    const teamIndex = teamRes.data.id;
    const abbreviation = teamRes.data.abbreviation;
    const city = teamRes.data.city;
    const conference = teamRes.data.conference;
    const division = teamRes.data.division;
    const full_name = teamRes.data.full_name;
    const name = teamRes.data.name;
    const imageUrl = `https://raw.githubusercontent.com/jabskii/team_images/master/img/${name}.png`;

    this.setState({
      teamIndex,
      abbreviation,
      city,
      conference,
      division,
      full_name,
      name,
      imageUrl
    });
  }

  render() {
    return (
      <div className="col">
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-5">
                <h5>{this.state.full_name}</h5>
              </div>
            </div>
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-md-3">
                  <img
                    src={this.state.imageUrl}
                    alt={{}}
                    className="card-img-top rounded mx-auto mt-2"
                  />
                </div>
                <div className="col-md-9">
                  <h6>Abbreviation: {this.state.abbreviation}</h6>
                  <h6>City: {this.state.city}</h6>
                  <h6>Conference: {this.state.conference}</h6>
                  <h6>Division: {this.state.division}</h6>
                  <h6>Full name: {this.state.full_name}</h6>
                  <h6>name: {this.state.name}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
