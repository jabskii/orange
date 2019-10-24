import React, { Component } from "react";
import axios from "axios";

import PlayerCard from "./PlayerCard";

export default class PlayerList extends Component {
  state = {
    url: "https://www.balldontlie.io/api/v1/players/",
    first_name: null
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ first_name: res.data["data"] });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.first_name ? (
          <div className="row">
            {this.state.first_name.map(player => (
              <PlayerCard />
            ))}
          </div>
        ) : (
          <h1>Loading NBA Players</h1>
        )}
      </React.Fragment>
    );
  }
}
