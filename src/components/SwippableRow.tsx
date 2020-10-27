import React from 'react';
import { Dimensions, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

const deviceWidth = Dimensions.get('window').width;

const SwippableRow: React.FC = () => {
  return (
    <ScrollView
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}>
      <MainSlider style={{ width: deviceWidth }}>
        <Text>Swipe me!</Text>
      </MainSlider>
      <ControlSlider>
        <ControlSliderEdit>
          <Text>Edit</Text>
        </ControlSliderEdit>
        <ControlSliderDelete>
          <Text>Delete</Text>
        </ControlSliderDelete>
      </ControlSlider>
    </ScrollView>
  );
};

const MainSlider = styled.View`
  width: ${deviceWidth}px;
  height: 36px;
  justify-content: center;
  background-color: #ababab;
`;

const ControlSlider = styled.View`
  width: ${deviceWidth / 3}px;
  height: 36px;
  flex-direction: row;
`;

const colors = {
  red: '#eb4d4b',
  yellow: '#f9ca24',
};

const ControlSliderEdit = styled.View`
  width: 50%;
  padding: 0 5px;
  background-color: ${colors.yellow};
  justify-content: center;
  align-items: center;
`;

const ControlSliderDelete = styled.View`
  width: 50%;
  padding: 0 5px;
  background-color: ${colors.red};
  justify-content: center;
  align-items: center;
`;

export default SwippableRow;
