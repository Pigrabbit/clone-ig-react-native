import TouchableIcon from 'components/TouchableIcon';
import { COLOR } from 'constants/styles';
import React, { useRef, useState } from 'react';
import { Dimensions, Image, Text } from 'react-native';
import { State, TapGestureHandler, TapGestureHandlerStateChangeEvent } from 'react-native-gesture-handler';
import { PostType } from 'stores/posts/types';
import styled from 'styled-components/native';

const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width;
const imageHeight = imageWidth;

interface Props {
  post: PostType;
  onCommentPress: (postId: number) => void;
}

const Post: React.FC<Props> = ({ post, onCommentPress }) => {
  const { id, writer, body, imgURL, comments } = post;
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const doubleTapRef = useRef<TapGestureHandler | null>(null);

  const likeButtonPressHandler = (): void => {
    console.log(isLiked ? 'unlike the post👎🏼' : 'like the post👍🏼');
    setIsLiked(!isLiked);
  };

  const imageDoubleTapHandler = (e: TapGestureHandlerStateChangeEvent): void => {
    if (e.nativeEvent.state === State.ACTIVE) setIsLiked(true);
  }

  const createLoadCommentMessage = (numberOfComment: number): string => {
    return `View ${numberOfComment} comment${numberOfComment === 1 ? '' : 's'}`;
  };

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
      <TapGestureHandler
        ref={doubleTapRef}
        onHandlerStateChange={imageDoubleTapHandler}
        numberOfTaps={2}>
        <Image
          source={{
            width: imageWidth,
            height: imageHeight,
            uri: imgURL,
          }}
        />
      </TapGestureHandler>
      <PostControlPanel>
        <PostControlPanelLeft>
          <TouchableIcon
            width={36}
            height={36}
            iconName={isLiked ? 'likeFilledIcon' : 'likeEmptyIcon'}
            tintColor={isLiked ? COLOR.PINK : null}
            onPress={likeButtonPressHandler}
          />
          <TouchableIcon
            width={36}
            height={36}
            iconName="commentIcon"
            onPress={() => onCommentPress(id)}
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
          onCommentPress(id);
        }}>
        {createLoadCommentMessage(comments.length)}
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
