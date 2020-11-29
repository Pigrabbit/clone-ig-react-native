import React from 'client/node_modules/react';
import { ScrollView } from 'react-native-gesture-handler';

export const Swipeable: React.FC = (props) => {
  return (
    <ScrollView
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}>
      {props.children}
    </ScrollView>
  );
};
