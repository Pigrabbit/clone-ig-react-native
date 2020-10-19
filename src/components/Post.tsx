import React from 'react'
import {Image, TouchableOpacity, Text, Dimensions} from 'react-native'
import styled from 'styled-components/native'
import {LOAD_MORE_COMMENT_MESSAGE} from '../constants/message'
import PostComment from './PostComment'
import TouchableIcon from './TouchableIcon'

export interface PostProps {
  writer: string
}

const Post: React.FC<PostProps> = (props) => {
  const dimensions = Dimensions.get('window')
  const imageWidth = dimensions.width
  const imageHeight = imageWidth

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
          <HighlightedText style={{fontSize: 16, marginLeft: 8}}>
            pigrabbit
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
          uri:
            'https://media.nkba.org/uploads/2017/09/Pine-Glades-Wetlands-Natural-Area-Sunset-Square-1024x1024.jpg',
        }}
      />
      <PostControlPanel>
        <PostControlPanelLeft>
          <TouchableIcon
            iconName="moreIcon"
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
          <HighlightedText>pigrabbit</HighlightedText> 여행마렵다... 언제 또
          가지ㅜㅜ
        </Text>
      </PostBody>
      <PostCommentList>
        <PostCommentLoader onPress={() => console.log('load all comments')}>
          {LOAD_MORE_COMMENT_MESSAGE}
        </PostCommentLoader>
        <PostComment writer="joedoe" content="우와 사진어디야?" />
        <PostComment writer="resit" content="Awesome picture!" />
      </PostCommentList>
    </>
  )
}

const PostHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`

const PostHeaderProfile = styled.View`
  flex-direction: row;
  align-items: center;
`

const PostControlPanel = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`

const Icon = styled.Image`
  width: 36px;
  height: 36px;
  margin: 0 5px;
`

const PostControlPanelLeft = styled.View`
  flex-direction: row;
`

const PostControlPanelRight = styled.View``

const PostBody = styled.View`
  margin: 10px;
`

export const HighlightedText = styled.Text`
  font-weight: 700;
`

const PostCommentList = styled.View`
  margin: 10px;
`

const PostCommentLoader = styled.Text`
  margin: 5px 0;
  color: #aaaaaa;
`

export default Post
