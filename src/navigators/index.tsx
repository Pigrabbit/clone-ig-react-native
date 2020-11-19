import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ASSETS } from 'constants/assets';
import { COLOR } from 'constants/styles';
import React, { useEffect } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ActivitiesScreen from 'screens/activities';
import MyPageScreen from 'screens/myPage';
import PostWriterScreen from 'screens/postWriter';
import { RootState } from 'stores';
import { fetchTheme } from 'stores/theme/actions';
import { AppTheme, isAppThemeType } from 'stores/theme/types';
import HomeScreenStack from './HomeStack';

const Tab = createBottomTabNavigator();

const RootTab: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchSavedTheme = async () => {
      const savedTheme = await AsyncStorage.getItem('theme');
      if (isAppThemeType(savedTheme)) {
        dispatch(fetchTheme(savedTheme));
      }
    };

    fetchSavedTheme();
  }, []);
  const theme = useSelector<RootState, AppTheme>(
    (rootState) => rootState.theme,
  );
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: COLOR.PINK,
        showLabel: false,
        style: { backgroundColor: COLOR[theme].backgroundColor },
      }}
      sceneContainerStyle={{ backgroundColor: COLOR[theme].backgroundColor }}>
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
        listeners={({ navigation }) => ({
          tabPress: () => {
            navigation.navigate('Home', {
              screen: 'Home',
            });
          },
        })}
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
