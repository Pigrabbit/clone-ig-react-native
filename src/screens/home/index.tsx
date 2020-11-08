import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from 'navigators/HomeStack';
import React from 'react';
import { useSelector } from 'react-redux';
import Post from 'screens/home/Post';
import { RootState } from 'stores';
import { PostState } from 'stores/posts/types';
import styled from 'styled-components/native';

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
  const onCommentPress = (postId: number) => {
    navigation.navigate('Comment', { postId });
  };

  return (
    <StyledScrollView>
      {postList.map((post, idx) => (
        <Post key={idx} post={post} onCommentPress={onCommentPress} />
      ))}
    </StyledScrollView>
  );
};

const StyledScrollView = styled.ScrollView`
  margin: 10px 0 20px 0;
`;

export default HomeScreen;
