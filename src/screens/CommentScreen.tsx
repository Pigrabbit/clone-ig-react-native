import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components/native';
import PostComment from '../components/PostComment';
import TouchableIcon from '../components/TouchableIcon';
import { HomeStackParamList } from '../routes';

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
  const { comments } = route.params;

  return (
    <KeyboardAvoidingView>
      <StyledScrollView>
        {comments.map((comment, idx) => (
          <PostComment
            key={idx}
            id={comment.id}
            writer={comment.writer}
            content={comment.content}
          />
        ))}
        <CommentInputPanel>
          <CommentInput placeholder="Write comment here..." />
          <TouchableIcon
            iconName="sendIcon"
            onPress={() => console.log('submit comment')}
          />
        </CommentInputPanel>
      </StyledScrollView>
    </KeyboardAvoidingView>
  );
};

const StyledScrollView = styled.ScrollView`
  margin: 10px;
`;

const CommentInputPanel = styled.View`
  padding: 0 5px 0 0;
  flex-direction: row;
  justify-content: space-between;
`;

const CommentInput = styled.TextInput`
  height: 36px;
  width: 85%;
  border-color: #000000;
  border-bottom-width: 1px;
`;

export default CommentScreen;
