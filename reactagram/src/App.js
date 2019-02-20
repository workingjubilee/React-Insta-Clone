import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
// import CommentSection from './components/CommentSection/CommentSection';
import PostsPage from './components/PostContainer/PostsPage';

class App extends Component {
  constructor() {
    super();

    this.state = {
      postArray: [],
      searchText: ''
    };
  }

  searchChange = (event) => {
    this.setState({
      searchText: event.target.value
    })
  }


  componentDidMount() {
    this.setState({
      postArray: [...dummyData]
    })
  };

  // import dummyData from './dummy-data';
  // gonna use a dummyData.map();
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
