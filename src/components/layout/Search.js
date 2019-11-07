import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Search = props => (
  <form class="md-form mt-3 mb-3" onSubmit={props.getPlayer}>
    <input class="form-control" type="text" placeholder="Search player" aria-label="Search" name="playerName" />
  </form>
);

export default Search;
