/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native'

import {Colors} from 'react-native/Libraries/NewAppScreen'
import styled from 'styled-components/native'
import Post from './src/components/Post'
import {FETCHED_POSTS} from './src/data'

declare const global: {HermesInternal: null | {}}

const App = () => {
  const posts = FETCHED_POSTS
  const dimensions = Dimensions.get('window')
  const imageWidth = dimensions.width
  const imageHeight = imageWidth

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <Section>
            {FETCHED_POSTS.map((post, idx) => (
              <Post
                key={idx}
                writer={post.writer}
                body={post.body}
                imgURL={post.imgURL}
                comments={post.comments}
              />
            ))}
          </Section>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const Section = styled.View`
  background-color: #fff;
  width: 100%;
`

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
})

export default App
