import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from 'navigators/HomeStack';
import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { useSelector } from 'react-redux';

import CommentInputPanel from 'screens/comment/CommentInputPanel';
import SwippableComment from 'screens/comment/SwipeableComment';
import { RootState } from 'stores';
import { PostState } from 'stores/posts/types';
import styled from 'styled-components/native';

type CommentScreenRouteProp = RouteProp<HomeStackParamList, 'Comment'>;
type CommentScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Comment'
>;

interface Props {
  route: CommentScreenRouteProp;
  navigation: CommentScreenNavigationProp;
}

const CommentScreen: React.FC<Props> = ({ route }) => {
  const { postId } = route.params;
  const { postList } = useSelector<RootState, PostState>(
    (rootState) => rootState.post,
  );

  const commentList = postList.filter((post) => post.id === postId)[0].comments;

  return (
    <KeyboardAvoidingView>
      <StyledScrollView>
        {commentList.map((comment, idx) => (
          <SwippableComment
            key={idx}
            postId={postId}
            id={comment.id}
            writer={comment.writer}
            content={comment.content}
          />
        ))}
        <CommentInputPanel postId={postId} />
      </StyledScrollView>
    </KeyboardAvoidingView>
  );
};

const StyledScrollView = styled.ScrollView`
  margin: 10px;
`;

export default CommentScreen;
