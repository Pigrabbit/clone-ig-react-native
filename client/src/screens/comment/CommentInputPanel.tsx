import TouchableIcon from 'components/TouchableIcon';
import { MOCK_WRITER } from 'constants/mock';
import { COLOR } from 'constants/styles';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'stores';
import {
  editComment,
  selectCommentToEdit,
  writeComment,
} from 'stores/posts/actions';
import { isCommentType, PostState } from 'stores/posts/types';
import { AppTheme } from 'stores/theme/types';
import styled from 'styled-components/native';

interface Props {
  postId: number;
}

const CommentInputPanel: React.FC<Props> = (props) => {
  const { postId } = props;
  const { editInProgessComment } = useSelector<RootState, PostState>(
    (rootState) => rootState.post,
  );
  const theme = useSelector<RootState, AppTheme>(
    (rootState) => rootState.theme,
  );
  const [text, setText] = useState<string>('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (editInProgessComment !== null) setText(editInProgessComment.content);
  }, [editInProgessComment]);

  const isEdittingMode = editInProgessComment !== null;
  const isInputEmpty = text.length === 0;

  const submitPressHandler = () => {
    if (!isEdittingMode && !isInputEmpty) {
      dispatch(writeComment(postId, { writer: MOCK_WRITER, content: text }));
      setText('');
    } else if (isEdittingMode) {
      if (!isCommentType(editInProgessComment)) return;
      dispatch(editComment(postId, { ...editInProgessComment, content: text }));
      dispatch(selectCommentToEdit(null));
      setText('');
    }
  };

  return (
    <Container>
      <CommentInput
        value={text}
        theme={theme}
        autoFocus={true}
        onChangeText={(text) => setText(text)}
        placeholder="Write comment here..."
        placeholderTextColor={COLOR[theme].gray}
      />
      <TouchableIcon
        width={24}
        height={24}
        iconName="sendIcon"
        tintColor={COLOR[theme].text}
        onPress={submitPressHandler}
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
  width: 90%;
  border-color: #000000;
  border-bottom-width: 1px;
  border-color: ${(props) => COLOR[props.theme].text};
  color: ${(props) => COLOR[props.theme].text};
`;

export default CommentInputPanel;
