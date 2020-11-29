import { Maybe } from 'components/Maybe';
import { Swipeable } from 'components/Swipeable';
import { MOCK_WRITER } from 'constants/mock';
import { COLOR } from 'constants/styles';
import React from 'client/node_modules/react';
import { Dimensions, Text } from 'client/node_modules/react-native';
import { useDispatch, useSelector } from 'client/node_modules/react-redux';
import { HighlightedText } from 'screens/home/Post';
import { RootState } from 'stores';
import { deleteComment, selectCommentToEdit } from 'stores/posts/actions';
import { DELETE_COMMENT, SELECT_COMMENT_TO_EDIT } from 'stores/posts/types';
import { AppTheme } from 'stores/theme/types';
import styled from 'client/node_modules/styled-components/native';

const deviceWidth = Dimensions.get('window').width;

interface Props {
  postId: number;
  id: number;
  writer: string;
  content: string;
}

const SwipeableComment: React.FC<Props> = ({ postId, id, writer, content }) => {
  const theme = useSelector<RootState, AppTheme>(
    (rootState) => rootState.theme,
  );
  const dispatch = useDispatch();
  const editPressHandler = () => {
    dispatch(selectCommentToEdit({id, writer, content}))
  };

  const deletePressHandler = () => {
    dispatch(deleteComment(postId, id))
  };

  return (
    <Swipeable>
      <MainSlider>
        <Text style={{ color: COLOR[theme].text }}>
          <HighlightedText>{writer}</HighlightedText> {content}
        </Text>
      </MainSlider>
      <Maybe isVisible={writer === MOCK_WRITER}>
        <ControlSlider>
          <ControlSliderEdit onPress={editPressHandler}>
            <Text style={{ color: COLOR[theme].text }}>Edit</Text>
          </ControlSliderEdit>
          <ControlSliderDelete onPress={deletePressHandler}>
            <Text style={{ color: COLOR[theme].text }}>Delete</Text>
          </ControlSliderDelete>
        </ControlSlider>
      </Maybe>
    </Swipeable>
  );
};

const MainSlider = styled.View`
  width: ${deviceWidth}px;
  height: 48px;
  justify-content: center;
`;

const ControlSlider = styled.View`
  width: ${deviceWidth / 3}px;
  height: 48px;
  flex-direction: row;
`;

const colors = {
  red: '#eb4d4b',
  yellow: '#f9ca24',
  gray: '#ababab',
};

const ControlSliderEdit = styled.TouchableOpacity`
  width: 50%;
  padding: 0 5px;
  background-color: ${colors.yellow};
  justify-content: center;
  align-items: center;
`;

const ControlSliderDelete = styled.TouchableOpacity`
  width: 50%;
  padding: 0 5px;
  background-color: ${colors.red};
  justify-content: center;
  align-items: center;
`;

export default SwipeableComment;
