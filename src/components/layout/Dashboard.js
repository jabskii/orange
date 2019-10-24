import React, { Component } from 'react';

import PlayerList from '../players/PlayerList';

export default class Dashboard extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <PlayerList />
                </div>
            </div>
        )
    }
}
