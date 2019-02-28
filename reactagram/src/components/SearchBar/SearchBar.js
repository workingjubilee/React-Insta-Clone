import React from 'react';
import styled from 'styled-components';

const TopNav = styled.nav`
  height: 100px;
`

const FitImg = styled.img`
  max-height: 100px;
  object-fit: contain;
`

const SearchBar = () => {
  return (
    <TopNav>
      <FitImg src="/img/igicon.svg" alt="instagram" /> <FitImg src="/img/iglogo.png" alt="" />
      Search Bar Unfinished
    </TopNav>
  );
}

export default SearchBar;
