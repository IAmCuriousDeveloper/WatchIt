import React from 'react';
import { Link } from 'react-router-dom';
const Header = props => {
  let utilSpace;
  if (props.showSearch) {
    utilSpace = (
      <input type="text" placeholder="Search" value={props.searchTerm} onChange={props.handleSearchTerm} />
    );
  } else {
    utilSpace = (
      <h2>
        <Link to="/search">
          Back
        </Link>
      </h2>
    );
  }
  return (
    <header>
      <h1>
        <Link to="/">
          WatchIT
        </Link>
      </h1>
      {utilSpace}
    </header>
  );
};


Header.defaultProps = {
  showSearch: false,
};

export default Header;