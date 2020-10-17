/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import styled from 'styled-components/native';

declare const global: {HermesInternal: null | {}};

const App = () => {
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
            <Post>
              <PostHeader>
                <PostHeaderProfile>
                  <Image source={{ width: 48, height: 48, uri: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png' }} /> 
                  <Text>pigrabbit</Text>
                </PostHeaderProfile>
                <TouchableOpacity onPress={() => console.log('more button tapped')}>
                  <Image style={{ width: 24, height: 24 }} source={require('./assets/icons/outline_more_horiz_black_48dp.png')}/>
                </TouchableOpacity>
              </PostHeader>
              <Image source={{ width: imageWidth, height: imageHeight, uri: 'https://media.nkba.org/uploads/2017/09/Pine-Glades-Wetlands-Natural-Area-Sunset-Square-1024x1024.jpg' }}/>
              <PostControlPanel>
                <PostControlPanelLeft>
                  <TouchableOpacity onPress={() => console.log('like button tapped')}>
                      <Icon source={require('./assets/icons/outline_favorite_border_black_48dp.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('comment button tapped')}>
                      <Icon source={require('./assets/icons/outline_maps_ugc_black_48dp.png')}/>
                    </TouchableOpacity>
                </PostControlPanelLeft>
                <PostControlPanelRight>
                  <TouchableOpacity onPress={() => console.log('archive button tapped')}>
                    <Icon source={require('./assets/icons/outline_archive_black_48dp.png')}/>
                  </TouchableOpacity>
                </PostControlPanelRight>
              </PostControlPanel>
                <PostBody>
                  <Text>
                    <HighlightedText>pigrabbit</HighlightedText> 여행마렵다... 언제 또 가지ㅜㅜ
                  </Text>
                </PostBody>
              <PostCommentList>
                <PostCommentLoader onPress={() => console.log('load all comments')}>View all 11 comments</PostCommentLoader>
                <PostComment>
                  <HighlightedText>joedoe</HighlightedText> 우와 사진어디야?
                </PostComment>
                <PostComment>
                  <HighlightedText>resit</HighlightedText> Awesome picture!
                </PostComment>
              </PostCommentList>
            </Post>
          </Section>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const Section = styled.View`
  background-color: #fff;
  width: 100%;
`

const Post = styled.View`
  
`

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
  width: 24px;
  height: 24px;
  margin: 0 5px;
`

const PostControlPanelLeft = styled.View`
  flex-direction: row;
`

const PostControlPanelRight = styled.View`
`

const PostBody = styled.View`
  margin: 10px;
`

const HighlightedText = styled.Text`
  font-weight: 700;
`

const PostCommentList = styled.View`
  margin: 10px;
`

const PostCommentLoader = styled.Text`
  margin: 5px 0;
  color: #aaaaaa;
`

const PostComment = styled.Text`
  margin: 5px 0;
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
});

export default App;
