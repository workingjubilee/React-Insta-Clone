import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

const PostContainer = props => {
  return (
    <article>
    <img src={props.post.thumbnailUrl} alt="user" />
    <h1>{props.post.username}</h1>
    <img src={props.post.imageUrl} alt="post" />
    <p>Likes: {props.post.likes}</p>
    <p>{props.post.timestamp}</p>
    <CommentSection comments={props.post.comments} />
    </article>
  );
}

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
