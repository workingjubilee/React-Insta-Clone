import React from 'react';
import styled from 'styled-components';

const TopNav = styled.nav`
  height: 100px;
`

const FitImg = styled.img`
  max-height: 100px;
  object-fit: contain;
`

const SearchBar = props => {
  return (
    <TopNav>
      <FitImg src="/img/igicon.svg" alt="instagram" /> <FitImg src="/img/iglogo.png" alt="" />
      <input type="text" onChange={props.searchChange} />
    </TopNav>
  );
}

// - Search
//   - Set up the search bar will like the comment input and the like button. In your function, filter out any post whose username doesn't match the search term passed in, then update the state with the resulting data.

export default SearchBar;
