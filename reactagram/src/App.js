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
      <SearchBar searchText={this.state.searchText} searchChange={this.searchChange} />
      {this.state.postArray.filter(postObject => {return postObject.username.includes(this.state.searchText)}).map(postObject => {return <PostContainer key={postObject.timestamp} post={postObject} likeThis={this.likeThis} />;}  )}
      </div>
    );
  }
}

export default App;
