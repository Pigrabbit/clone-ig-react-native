import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import { WRITE_COMMENT } from '../stores/posts/types';
import TouchableIcon from './TouchableIcon';

interface Props {
  postId: number;
}

const CommentInputPanel: React.FC<Props> = (props) => {
  const { postId } = props;
  const [text, setText] = useState<string>('');
  const dispatch = useDispatch();

  return (
    <Container>
      <CommentInput
        value={text}
        onChangeText={(text) => setText(text)}
        placeholder="Write comment here..."
      />
      <TouchableIcon
        iconName="sendIcon"
        onPress={() =>
          dispatch({
            type: WRITE_COMMENT,
            payload: { postId, comment: { content: text } },
          })
        }
      />
    </Container>
  );
};

const Container = styled.View`
  padding: 0 5px 0 0;
  flex-direction: row;
  justify-content: space-between;
`;

const CommentInput = styled.TextInput`
  height: 36px;
  width: 85%;
  border-color: #000000;
  border-bottom-width: 1px;
`;

export default CommentInputPanel;
