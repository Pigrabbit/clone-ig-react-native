import React from 'react';
import styled from 'styled-components/native';
import { CommentType } from '../stores/posts/types';
import { HighlightedText } from './Post';

const PostComment: React.FC<CommentType> = (props) => {
  const { writer, content } = props;
  return (
    <Container>
      <HighlightedText>{writer}</HighlightedText> {content}
    </Container>
  );
};

const Container = styled.Text`
  margin: 5px 0;
`;

export default PostComment;
