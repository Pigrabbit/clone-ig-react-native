import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Post from '../components/Post';
import { FETCHED_POSTS } from '../data';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { HomeStackParamList } from '../routes';

export type HomeScreenRouteProp = RouteProp<HomeStackParamList, 'Home'>
export type HomeScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'Home'>

interface Props {
  route: HomeScreenRouteProp
  navigation: HomeScreenNavigationProp
}

const HomeScreen: React.FC<Props> = ({
  navigation,
}) => {
  const onCommentPress = () => {
    navigation.navigate('Comment');
  };

  return (
    <ScrollView>
      {FETCHED_POSTS.map((post, idx) => (
        <Post key={idx} post={post} onCommentPress={onCommentPress} />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;
