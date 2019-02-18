import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

const CommentSection = props => {
  return (
    <section>
      {props.comments.map(commentObj => {return <Comment username={commentObj.username} text={commentObj.text} />})}
      <form>
        <input type="text"></input><button>Say it!</button>
      </form>
    </section>
  );
}

CommentSection.propTypes = {
  comments: PropTypes.array
}




export default CommentSection;
