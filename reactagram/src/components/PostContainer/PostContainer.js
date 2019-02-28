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
`

const FitImg = styled.img`
  max-height: 100px;
  object-fit: contain;
`

const PostContainer = props => {
  return (
    <PostBox>
    <NameHeader><img src={props.post.thumbnailUrl} alt="user" />
    <h1>{props.post.username}</h1></NameHeader>
    <img src={props.post.imageUrl} alt="post" />
    <FitImg src="/img/hearticon.svg" alt="like button" />
    <p>{props.post.likes} likes</p>
    <CommentSection comments={props.post.comments} />
    <p>{props.post.timestamp}</p>
    </PostBox>
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
