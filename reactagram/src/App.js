import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
// import CommentSection from './components/CommentSection/CommentSection';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();

    this.state = {
    };
  }



  // import dummyData from './dummy-data';
  // gonna use a dummyData.map();
  render() {
    return (
      <div className="App">
      <SearchBar />
      {dummyData.map(postObject => { return <PostContainer key={postObject.timestamp} post={postObject} />;}  )}
      </div>
    );
  }
}

export default App;
