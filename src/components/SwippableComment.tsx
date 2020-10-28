import React from 'react';
import { Dimensions, Text } from 'react-native';
import styled from 'styled-components/native';
import { HighlightedText } from './Post';

const deviceWidth = Dimensions.get('window').width;

interface Props {
  id: number;
  writer: string;
  content: string;
}

const SwippableComment: React.FC<Props> = (props) => {
  const { writer, content } = props;

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
      <ControlSlider>
        <ControlSliderEdit>
          <Text>Edit</Text>
        </ControlSliderEdit>
        <ControlSliderDelete>
          <Text>Delete</Text>
        </ControlSliderDelete>
      </ControlSlider>
    </Container>
  );
};

const Container = styled.ScrollView``;

const MainSlider = styled.View`
  width: ${deviceWidth}px;
  height: 48px;
  justify-content: center;
  /* background-color: #ababab; */
`;

const ControlSlider = styled.View`
  width: ${deviceWidth / 3}px;
  height: 48px;
  flex-direction: row;
`;

const colors = {
  red: '#eb4d4b',
  yellow: '#f9ca24',
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
