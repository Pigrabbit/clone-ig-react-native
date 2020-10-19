import React from 'react'
import styled from 'styled-components/native'
import {HighlightedText} from './Post'

export interface PostCommentProps {
  writer: string
  content: string
}

const PostComment: React.FC<PostCommentProps> = (props) => {
  const {writer, content} = props
  return (
    <Container>
      <HighlightedText>{writer}</HighlightedText> {content}
    </Container>
  )
}

const Container = styled.Text`
  margin: 5px 0;
`

export default PostComment
