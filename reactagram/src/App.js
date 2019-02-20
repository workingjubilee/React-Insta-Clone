import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './components/authentication/withAuthenticate.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      postArray: [],
      searchText: ''
    };
  }

  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

//
// - Authenticate will look a lot like this when you're done setting it up.
//
// ```js
// const authenticate = App =>
// class extends React.Component {
//   render() {
//     return <App />;
//   }
// };
// ```

// const withAuthenticate = App =>
  // class extends React.Component {
  //   render() {
  //     return <App />;
  //   }
  // };

export default App;
