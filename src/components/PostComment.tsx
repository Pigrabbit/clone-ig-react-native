import React from 'react';
import styled from 'styled-components/native';
import { HighlightedText } from './Post';

export type CommentType = {
  writer: string;
  content: string;
};

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
