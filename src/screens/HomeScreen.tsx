import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Post from '../components/Post';
import { FETCHED_POSTS } from '../data';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { HomeStackParamList } from '../routes';
import { CommentType } from '../components/PostComment';

type HomeScreenRouteProp = RouteProp<HomeStackParamList, 'Home'>;
type HomeScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Home'
>;

interface Props {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const onCommentPress = (comments: CommentType[]) => {
    navigation.navigate('Comment', { comments });
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
