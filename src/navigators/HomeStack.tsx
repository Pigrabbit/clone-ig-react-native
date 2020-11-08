import { createStackNavigator } from "@react-navigation/stack";
import CommentScreen from "screens/comment";
import HomeScreen from "screens/home";
import React from 'react'

export type HomeStackParamList = {
  Home: undefined;
  Comment: {
    postId: number;
  };
};

const Stack = createStackNavigator<HomeStackParamList>();

const HomeScreenStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Comment" component={CommentScreen} />
    </Stack.Navigator>
  );
};

export default HomeScreenStack
