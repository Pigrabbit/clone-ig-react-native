import React from 'react';
import { Image, Text, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { LOAD_MORE_COMMENT_MESSAGE } from '../constants/message';
import PostComment, { CommentType } from './PostComment';
import TouchableIcon from './TouchableIcon';

export type PostType = {
  writer: string;
  body: string;
  imgURL: string;
  comments: CommentType[];
};

interface PostProps {
  post: PostType;
  onCommentPress: (comments: CommentType[]) => void;
}

const Post: React.FC<PostProps> = (props) => {
  const { writer, body, imgURL, comments } = props.post;
  const dimensions = Dimensions.get('window');
  const imageWidth = dimensions.width;
  const imageHeight = imageWidth;

  return (
    <>
      <PostHeader>
        <PostHeaderProfile>
          <Image
            source={{
              width: 48,
              height: 48,
              uri:
                'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
            }}
          />
          <HighlightedText style={{ fontSize: 16, marginLeft: 8 }}>
            {writer}
          </HighlightedText>
        </PostHeaderProfile>
        <TouchableIcon
          iconName="moreIcon"
          onPress={() => console.log('more button tapped')}
        />
      </PostHeader>
      <Image
        source={{
          width: imageWidth,
          height: imageHeight,
          uri: imgURL,
        }}
      />
      <PostControlPanel>
        <PostControlPanelLeft>
          <TouchableIcon
            iconName="likeIcon"
            onPress={() => console.log('like button tapped')}
          />
          <TouchableIcon
            iconName="commentIcon"
            onPress={() => console.log('comment button tapped')}
          />
        </PostControlPanelLeft>
        <PostControlPanelRight>
          <TouchableIcon
            iconName="archiveIcon"
            onPress={() => console.log('archive button tapped')}
          />
        </PostControlPanelRight>
      </PostControlPanel>
      <PostBody>
        <Text>
          <HighlightedText>{writer}</HighlightedText> {body}
        </Text>
      </PostBody>
      <PostCommentLoader
        onPress={() => {
          props.onCommentPress(comments);
        }}>
        {LOAD_MORE_COMMENT_MESSAGE}
      </PostCommentLoader>
    </>
  );
};

const PostHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

const PostHeaderProfile = styled.View`
  flex-direction: row;
  align-items: center;
`;

const PostControlPanel = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

const PostControlPanelLeft = styled.View`
  flex-direction: row;
`;

const PostControlPanelRight = styled.View``;

const PostBody = styled.View`
  margin: 10px;
`;

export const HighlightedText = styled.Text`
  font-weight: 700;
`;

const PostCommentLoader = styled.Text`
  margin: 0 10px;
  color: #aaaaaa;
`;

export default Post;
