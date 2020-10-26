import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import Post from '../components/Post';
import SwippableRow from '../components/SwippableRow';
import { HomeStackParamList } from '../routes';
import { RootState } from '../stores';
import { PostState } from '../stores/posts/types';

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
      <SwippableRow />
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
