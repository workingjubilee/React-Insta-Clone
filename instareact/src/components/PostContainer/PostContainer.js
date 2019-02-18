import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

const PostContainer = props => {
  return (
    <article>
    <h1>{props.post.username}</h1>
    <CommentSection comments={props.post.comments} />

    </article>
  );
}

PostContainer.propTypes = {
  post: PropTypes.object
}


export default PostContainer;
