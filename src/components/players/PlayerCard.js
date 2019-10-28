import React, { Component } from 'react';



export default class PlayerCard extends Component {

    state = {
        first_name: '',
        last_name: '',
        imageUrl: '',
        full_name: ''
    }
    
    componentDidMount() {
        const { first_name, last_name, url, full_name } = this.props;
        const imageUrl = `https://nba-players.herokuapp.com/players/${last_name}/${first_name}`;

        this.setState({
            first_name,
            last_name,
            imageUrl,
            full_name
        });
    }

    render() {
        return (
            <div className='col-md-3 col-sm-6 mb-5'>
                <div className="card">
                    <h5 className="card-header">{ this.state.first_name } { this.state.last_name }</h5>
                    <div className="card-body mx-auto">
                        <h6 className="card-title">{ this.state.full_name }</h6>
                    </div>
                </div>
            </div>
        )
    }
}
