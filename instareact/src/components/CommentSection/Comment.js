import React from 'react';

const Comment = props => {
  return (
    <React.Fragment>
    <h1>{props.username}</h1>
    <p>{props.text}</p>
    </React.Fragment>
  );
}

export default Comment;
