import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PostComment from '../components/PostComment';
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
  // console.log(comments)
  // <Text>Comment Screen</Text>;
  return (
    <ScrollView>
      {comments.map((comment, idx) => (
        <PostComment
          key={idx}
          writer={comment.writer}
          content={comment.content}
        />
      ))}
    </ScrollView>
  );
};

export default CommentScreen;
