import React from 'react';
import Comment from './Comment';

const CommentSection = props => {
  return (
    <section>
    {props.comments.map(commentObj => {return <Comment username={commentObj.username} text={commentObj.text} />})}
    </section>
  );
}

export default CommentSection;
