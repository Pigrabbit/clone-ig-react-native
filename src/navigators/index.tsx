import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ASSETS } from 'constants/assets';
import { COLOR } from 'constants/styles';
import React from 'react';
import { Image } from 'react-native';
import ActivitiesScreen from 'screens/activities';
import MyPageScreen from 'screens/myPage';
import PostWriterScreen from 'screens/postWriter';
import HomeScreenStack from './HomeStack';

const Tab = createBottomTabNavigator();

const RootTab: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: COLOR.PINK, showLabel: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreenStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={ASSETS.homeIcon}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PostWriter"
        component={PostWriterScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={ASSETS.postIcon}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Activities"
        component={ActivitiesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={ASSETS.likeFilledIcon}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={MyPageScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={ASSETS.personIcon}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootTab;
