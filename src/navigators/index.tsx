import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import ActivitiesScreen from 'screens/activities';
import PostWriterScreen from 'screens/postWriter';
import SettingsScreen from 'screens/settings';
import HomeScreenStack from './HomeStack';

// TODO: add BottomTabNavigation
// bootTab - home, post(+), log(activitieds), mypage(settings)

const Tab = createBottomTabNavigator();

const RootTab: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreenStack} />
      <Tab.Screen name="PostWriter" component={PostWriterScreen} />
      <Tab.Screen name="Activities" component={ActivitiesScreen} />
      <Tab.Screen name="Setting" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default RootTab;
