import React from 'react';
import { Dimensions, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import { MOCK_WRITER } from '../constants/mock';
import { DELETE_COMMENT, SELECT_COMMENT_TO_EDIT } from '../stores/posts/types';
import { HighlightedText } from './Post';

const deviceWidth = Dimensions.get('window').width;

interface Props {
  postId: number;
  id: number;
  writer: string;
  content: string;
}

const SwippableComment: React.FC<Props> = (props) => {
  const { postId, id, writer, content } = props;
  const dispatch = useDispatch();
  const editPressHandler = () => {
    dispatch({
      type: SELECT_COMMENT_TO_EDIT,
      payload: {
        editInProgressComment: {
          id,
          writer,
          content,
        },
      },
    });
  };

  const deletePressHandler = () => {
    dispatch({ type: DELETE_COMMENT, payload: { postId, commentId: id } });
  };

  return (
    <Container
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}>
      <MainSlider>
        <Text>
          <HighlightedText>{writer}</HighlightedText> {content}
        </Text>
      </MainSlider>
      {props.writer === MOCK_WRITER ? (
        <ControlSlider>
          <ControlSliderEdit onPress={editPressHandler}>
            <Text>Edit</Text>
          </ControlSliderEdit>
          <ControlSliderDelete onPress={deletePressHandler}>
            <Text>Delete</Text>
          </ControlSliderDelete>
        </ControlSlider>
      ) : null}
    </Container>
  );
};

const Container = styled.ScrollView``;

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

export default SwippableComment;
