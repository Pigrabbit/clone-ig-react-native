import React from 'react'
import Post from '../components/Post'
import { FETCHED_POSTS } from '../data'

const HomeScreen: React.FC = () => {
  return (
    <>
      {FETCHED_POSTS.map((post, idx) => (
        <Post
          key={idx}
          writer={post.writer}
          body={post.body}
          imgURL={post.imgURL}
          comments={post.comments}
        />
      ))}
    </>
  )
}

export default HomeScreen
