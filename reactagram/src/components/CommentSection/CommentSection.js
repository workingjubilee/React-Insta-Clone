import React, { Component } from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FitImg = styled.img`
  max-height: 20px;
  object-fit: contain;
`;

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      likes: this.props.likes,
      liked: false
    };
  }

  likeThis = event => {
    this.setState(state => ({
      liked: !state.liked,
      likes: state.likes += 1

    }))

  };

  addNewComment = event => {
    event.preventDefault();
    const newComments = [...this.state.comments];
    const newComment = {
      username: "you",
      text: this.state.value
    }
    newComments.push(newComment);
    this.setState({
      comments: [...newComments],
      value: ''
    });
  };

  commentChange = event => {
    this.setState(state => ({
      value: event.target.value
    }));
  }

  componentDidUpdate() {
    console.log(this.state.liked);
    console.log(this.state.likes)
  }


  render() {
    return (
      <section>
        <FitImg src="/img/hearticon.svg" alt="like button" onClick={this.likeThis} />
        <p>{this.state.likes} likes</p>
        {this.state.comments.map(commentObj => {return <Comment key={commentObj.username + commentObj.text} username={commentObj.username} text={commentObj.text} />})}
        <form onSubmit={this.addNewComment}>
          <input value={this.state.value} onChange={this.commentChange} type="text" /><button>...</button>
        </form>
      </section>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.array
}

  // - Lets divide up the data that we've been working with this far by separating the comments array onto a new component's state. Pass down the comments through each post to the CommentSection component. Be sure that you set the incoming `comments` props data on the state of the CommentSection component.
// - Create a function in `CommentSection.js` called `addNewComment` that takes in an event and an index number. The function will add the comment that is on the event object to the post that is at that index number.
// - Pass the `addNewComment` function down the component tree to where ever you have your 'Add a comment...' input.
// - The 'Add a comment...' input should be wrapped in a `<form></form>` element. Using that form's `onSubmit` event handler, invoke the `addNewComment` function and pass it the required arguments it needs to add a new comment.
// - Update your state with the new comment (This should trigger your component tree to "re-render" with your new comment on that post).



export default CommentSection;
