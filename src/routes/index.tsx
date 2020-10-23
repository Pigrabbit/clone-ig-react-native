import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CommentScreen from '../screens/CommentScreen';
import HomeScreen from '../screens/HomeScreen';
import { CommentType } from '../stores/posts/types';


export type HomeStackParamList = {
  Home: undefined
  Comment: {
    comments: CommentType[]
  }
}
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
