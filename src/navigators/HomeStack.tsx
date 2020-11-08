import { createStackNavigator } from '@react-navigation/stack';
import CommentScreen from 'screens/comment';
import HomeScreen from 'screens/home';
import React from 'react';
import { COLOR } from 'constants/styles';
import { useSelector } from 'react-redux';
import { RootState } from 'stores';
import { AppTheme } from 'stores/theme/types';

export type HomeStackParamList = {
  Home: undefined;
  Comment: {
    postId: number;
  };
};

const Stack = createStackNavigator<HomeStackParamList>();

const HomeScreenStack: React.FC = () => {
  const theme = useSelector<RootState, AppTheme>(
    (rootState) => rootState.theme,
  );

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: COLOR[theme].backgroundColor },
        headerTitleStyle: { color: COLOR[theme].text },
        cardStyle: { backgroundColor: COLOR[theme].backgroundColor },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Comment" component={CommentScreen} />
    </Stack.Navigator>
  );
};

export default HomeScreenStack;
