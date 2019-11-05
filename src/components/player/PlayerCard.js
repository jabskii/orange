import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import spinner from '../player/spinner.gif';

const Headshot = styled.img`
  width: 6em;
  height: 6em;
  display: none;
`;

const Card = styled.div`
  box-shadow: 0 1px 3px rgba(255, 255, 255, 0.12),
    0 1px 2px rgba(255, 255, 255, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(255, 255, 255, 0.25),
      0 10px 10px rgba(238, 102, 30, 0.22);
  }
  -moz-user-select: none;
  -website-user-select: none;
  user-select: none;
  -o-user-select: none;
`;

const StyledLink = styled(Link)`
  text-decorations: one;
  color: black;
  &: focus,
  &: hover,
  &: visited,
  &: link,
  &: active {
    text-decoration: none;
  }
`;

export default class PlayerCard extends Component {
  state = {
    id: null,
    first_name: '',
    last_name: '',
    imageUrl: '',
    imageLoading: true,
    tooManyRequests: false
  };

  componentDidMount() {
    const { id, first_name, last_name } = this.props;
    const imageUrl = `https://nba-players.herokuapp.com/players/${last_name}/${first_name}`;

    this.setState({
      id,
      first_name,
      last_name,
      imageUrl
    });
  }

  render() {
    return (
      <div className="col-md-3 col-sm-6 mb-5">
        <StyledLink to={`players/${this.state.id}`}>
          <Card className="card">
            <h5 className="card-header">
              {this.state.first_name} {this.state.last_name}
            </h5>
            {this.state.imageLoading ? (
              <img
                src={spinner}
                alt={{}}
                style={{ width: '22px', height: '65px' }}
                className="card-img-top rounded mx-auto d-block mt-2"
              />
            ) : null}
            <Headshot
              className="card-img-top rounded mx-auto mt-2"
              onLoad={() => this.setState({ imageLoading: false })}
              onError={() => this.setState({ tooManyRequests: true })}
              src={this.state.imageUrl}
              style={
                this.state.tooManyRequests
                  ? { display: 'none' }
                  : this.state.imageLoading
                  ? null
                  : { display: 'block' }
              }
            />
            {this.state.tooManyRequests ? (
              <h6 className="mx-auto">
                <span className="badge badge-danger mt-2">
                  Too Many Requests OR Image Not Found
                </span>
              </h6>
            ) : null}
            <div className="card-body mx-auto">
              <h6 className="card-title">{this.state.full_name}</h6>
            </div>
          </Card>
        </StyledLink>
      </div>
    );
  }
}
