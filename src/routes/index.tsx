import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CommentScreen from '../screens/comment';
import HomeScreen from '../screens/home';

export type HomeStackParamList = {
  Home: undefined;
  Comment: {
    postId: number;
  };
};
const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeScreenStack: React.FC = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Comment" component={CommentScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeScreenStack;
