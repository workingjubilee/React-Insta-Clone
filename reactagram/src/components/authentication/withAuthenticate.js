import React from 'react';

const withAuthenticate = Page1 => Page2 => props => {
  console.log(window.localStorage);
  if (window.localStorage.getItem('loggedIn') === 'true') {
    return <Page1 />
  } else {
    return <Page2 />
  }
}

export default withAuthenticate;
