import { RouteProp } from 'client/node_modules/@react-navigation/native';
import { StackNavigationProp } from 'client/node_modules/@react-navigation/stack';
import { COLOR } from 'constants/styles';
import { HomeStackParamList } from 'navigators/HomeStack';
import React from 'client/node_modules/react';
import { StatusBar } from 'client/node_modules/react-native';
import { useSelector } from 'client/node_modules/react-redux';
import Post from 'screens/home/Post';
import { RootState } from 'stores';
import { PostState } from 'stores/posts/types';
import { AppTheme } from 'stores/theme/types';
import styled from 'client/node_modules/styled-components/native';

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
  const theme = useSelector<RootState, AppTheme>(
    (rootState) => rootState.theme,
  );

  const onCommentPress = (postId: number) => {
    navigation.navigate('Comment', { postId });
  };

  return (
    <StyledScrollView theme={theme}>
      <StatusBar
        barStyle={theme === 'DARK_MODE' ? 'light-content' : 'dark-content'}
      />
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
