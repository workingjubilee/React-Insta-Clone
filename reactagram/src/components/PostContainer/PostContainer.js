import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostBox = styled.article`
  border: 1px solid silver;
  max-width: 640px;
`;

const NameHeader = styled.header`
  display: flex;
`;



const PostContainer = props => {
  return (
    <PostBox>
    <NameHeader><img src={props.post.thumbnailUrl} alt="user" />
    <h1>{props.post.username}</h1></NameHeader>
    <img src={props.post.imageUrl} alt="post" />
    <CommentSection comments={props.post.comments} likes={props.post.likes} />
    <p>{props.post.timestamp}</p>
    </PostBox>
  );
}

// - Liking posts
//   - This will be set up a lot like the 'Add a comment...' input. Pass a function down to where your heart icon is, and use `onClick` event handler to increment that post's likes.

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    comments: PropTypes.array
  })


}

// An object taking on a particular shape
// optionalObjectWithShape: PropTypes.shape({
//   color: PropTypes.string,
//   fontSize: PropTypes.number
// }),

export default PostContainer;
