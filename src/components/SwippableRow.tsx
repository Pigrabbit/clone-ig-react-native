import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const deviceWidth = Dimensions.get('window').width;

const SwippableRow: React.FC = () => {
  return (
    <ScrollView
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}>
      <View style={{ width: deviceWidth }}>
        <Text>Swipe me!</Text>
      </View>
      <View style={{ width: deviceWidth }}>
        <Text>Swipe me 22</Text>
      </View>
      <View style={{ width: deviceWidth }}>
        <Text>Swipe me 333</Text>
      </View>
    </ScrollView>
  );
};

export default SwippableRow;
