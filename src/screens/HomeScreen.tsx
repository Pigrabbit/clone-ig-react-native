import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import Post from '../components/Post';
import { HomeStackParamList } from '../routes';
import { RootState } from '../stores';
import { CommentType, PostState } from '../stores/posts/types';

type HomeScreenRouteProp = RouteProp<HomeStackParamList, 'Home'>;
type HomeScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'Home'>;

interface Props {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { postList } = useSelector<RootState, PostState>(
    (rootState) => rootState.post,
  );
  const onCommentPress = (comments: CommentType[]) => {
    navigation.navigate('Comment', { comments });
  };

  return (
    <ScrollView>
      {postList.map((post, idx) => (
        <Post key={idx} post={post} onCommentPress={onCommentPress} />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;
