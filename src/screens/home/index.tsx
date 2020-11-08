import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { COLOR } from 'constants/styles';
import { HomeStackParamList } from 'navigators/HomeStack';
import React from 'react';
import { useSelector } from 'react-redux';
import Post from 'screens/home/Post';
import { RootState } from 'stores';
import { PostState } from 'stores/posts/types';
import { AppTheme } from 'stores/theme/types';
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
  const theme = useSelector<RootState, AppTheme>((rootState) => rootState.theme)

  const onCommentPress = (postId: number) => {
    navigation.navigate('Comment', { postId });
  };

  return (
    <StyledScrollView theme={theme}>
      {postList.map((post, idx) => (
        <Post key={idx} post={post} onCommentPress={onCommentPress} />
      ))}
    </StyledScrollView>
  );
};

const StyledScrollView = styled.ScrollView`
  background-color: ${(props) => COLOR[props.theme].backgroundColor};
`;

export default HomeScreen;
