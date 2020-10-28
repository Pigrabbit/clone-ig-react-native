import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import CommentInputPanel from '../components/CommentInputPanel';
import SwippableComment from '../components/SwippableComment';
import { HomeStackParamList } from '../routes';
import { RootState } from '../stores';
import { PostState } from '../stores/posts/types';

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
