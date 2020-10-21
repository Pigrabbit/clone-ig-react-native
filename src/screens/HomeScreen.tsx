import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Post from '../components/Post'
import { FETCHED_POSTS } from '../data'

const HomeScreen: React.FC = () => {
  return (
    <ScrollView>
      {FETCHED_POSTS.map((post, idx) => (
        <Post
          key={idx}
          writer={post.writer}
          body={post.body}
          imgURL={post.imgURL}
          comments={post.comments}
        />
      ))}
    </ScrollView>
  )
}

export default HomeScreen
