import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
  return (
    <article>
    <h1>{props.post.username}</h1>
    <CommentSection comments={props.post.comments} />

    </article>
  );
}

export default PostContainer;
