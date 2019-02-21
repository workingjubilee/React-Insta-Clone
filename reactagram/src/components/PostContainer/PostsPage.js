import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import dummyData from '../../dummy-data';

class PostsPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      postArray: [],
      searchText: ''
    }
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

  render() {
    return (
      <div>
      <SearchBar searchText={this.state.searchText} searchChange={this.searchChange} />
      {this.state.postArray.filter(postObject => {return postObject.username.includes(this.state.searchText)}).map(postObject => {return <PostContainer key={postObject.timestamp} post={postObject} />;}  )}
      </div>
    );
  }
}

export default PostsPage;
