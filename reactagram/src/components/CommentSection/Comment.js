import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

const Comment = props => {
  return (
    <React.Fragment>
    <p><strong>{props.username}</strong> {props.text}</p>
    </React.Fragment>
  );
}

Comment.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string
}

export default Comment;
