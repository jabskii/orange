import React, { Component } from 'react';
import axios from 'axios';

import PlayerCard from './PlayerCard';

export default class PlayerList extends Component {

    state = {
        url: "https://www.balldontlie.io/api/v1/players/",
        first_name: null
    };

    async componentDidMount() {
        const res = axios.get(this.state.url);
        this.setState({ first_name: res.data['data'] });
    }

    render() {
        return (
            <div>
            {this.state.player ? (<div className="row">
            {this.state.player.map(player => (
                <PlayerCard />
            ))}
        </div>) : (<h1>Loading NBA Players</h1>)}
        </div>
        );
    }
}
