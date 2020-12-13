import { MOCK_WRITER } from 'constants/mock';
import React from 'react';
import { Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { HighlightedText } from 'screens/home/Post';
import { selectCommentToEdit } from 'stores/posts/actions';
import { CommentType, SELECT_COMMENT_TO_EDIT } from 'stores/posts/types';
import styled from 'styled-components/native';

const PostComment: React.FC<CommentType> = (props) => {
  const { id, writer, content } = props;
  const dispatch = useDispatch();

  const editPressHadler = () => {
    dispatch(selectCommentToEdit({ id, writer, content }));
  };

  return (
    <Container>
      <Text>
        <HighlightedText>{writer}</HighlightedText> {content}
      </Text>
      {writer === MOCK_WRITER ? (
        <EditButton title="edit" onPress={editPressHadler} />
      ) : (
        <EditButton title="" />
      )}
    </Container>
  );
};

const Container = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const EditButton = styled.Button``;

export default PostComment;
