import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';


const PostBox = styled.article`
  border: 1px solid silver;
  max-width: 640px;
`;

const NameHeader = styled.header`
  display: flex;
  max-height: 75px;
  font-size: 2rem;
  align-items: center;
`;

const UserName = styled.h6`
  font-weight: bolder;
  padding: 2%;
`;

const UserThumb = styled.img`
  max-height: inherit;
  object-fit: scale-down;
`;

// - Re-factor your `PostContainer` component use only styled components
//   - Start with the `UserThumbnail` and `Username`
  // - Note that the `Username` styles could most certainly be used by your `CommentSection` component as well.
  // - To achieve this, you'll simply just build out your reusable `styled-component` inside of a `Styles/Reusables` directory. This is where you could store all of your reusable styled components and export them out of their respective files to then import them for reuse.
  //   - Notice that the `Username` on top of the Post is a bit bolder than the `Username`'s found in the comment section. If there is a way to make this reusable styled component accept a prop that will distinguish it from being now is the time to figure that out.


const PostContainer = props => {
  return (
    <PostBox>
    <NameHeader><UserThumb src={props.post.thumbnailUrl} alt="user" />
    <UserName>{props.post.username}</UserName></NameHeader>
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
