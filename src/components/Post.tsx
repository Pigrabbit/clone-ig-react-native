import React, { useState } from 'react';
import { Dimensions, Image, Text } from 'react-native';
import styled from 'styled-components/native';
import { LOAD_MORE_COMMENT_MESSAGE } from '../constants/message';
import { PostType } from '../stores/posts/types';
import TouchableIcon from './TouchableIcon';

const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width;
const imageHeight = imageWidth;

interface Props {
  post: PostType;
  onCommentPress: (postId: number) => void;
}

const Post: React.FC<Props> = (props) => {
  const { id, writer, body, imgURL } = props.post;
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const likePressHandler = (): void => {
    console.log(isLiked ? 'unlike the post👎🏼' : 'like the post👍🏼')
    setIsLiked(!isLiked)
  }

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
          width={36}
          height={36}
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
            width={36}
            height={36}
            iconName={isLiked? 'likeFilledIcon' : 'likeEmptyIcon'}
            tintColor={isLiked? '#ff7979' : null}
            onPress={likePressHandler}
          />
          <TouchableIcon
            width={36}
            height={36}
            iconName="commentIcon"
            onPress={() => console.log('comment button tapped')}
          />
        </PostControlPanelLeft>
        <PostControlPanelRight>
          <TouchableIcon
            width={36}
            height={36}
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
          props.onCommentPress(id);
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
