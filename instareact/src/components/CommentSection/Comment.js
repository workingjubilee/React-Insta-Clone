import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
  return (
    <React.Fragment>
    <h1>{props.username}</h1>
    <p>{props.text}</p>
    </React.Fragment>
  );
}

Comment.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string
}

export default Comment;
